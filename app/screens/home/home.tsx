import type { Route } from './+types/home';

import './home.css';

import { Product } from './components';
import { getCategories, getProducts, sortProductsByPrice } from '@services';
import { Footer } from './components/footer';

import { PRODUCTS_BY_PAGE } from '@consts';
import { useHomeHelper } from './home.hook';
import { Filter } from './components/filter';
import { CategoryFilter } from './components/categoryFilter';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'New React Router App' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const sortBy = url.searchParams.get('sortBy');

    const page = url.searchParams.get('page');
    const currentPage = page ? Number(page) : 1;

    const products = sortBy
        ? await sortProductsByPrice(sortBy as 'asc' | 'desc', currentPage)
        : await getProducts(currentPage);

    const categories = await getCategories();

    return { products, categories, currentPage };
}

export default function Home({ loaderData }: Route.ComponentProps) {
    const { products, categories, currentPage = 1 } = loaderData;

    const {
        filters,
        showingString,
        onChangeCategory,
        onChangePage,
        onChangeSortBy,
    } = useHomeHelper(currentPage, products.total);

    return (
        <div className="flex flex-row gap-12">
            <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center">
                    <Filter onChangeSortBy={onChangeSortBy} />

                    <p className="p">{showingString}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products?.products?.map((product: any) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.images[0]}
                        />
                    ))}
                </div>

                <Footer
                    numberOfPages={Math.ceil(products.total / PRODUCTS_BY_PAGE)}
                    currentPage={currentPage}
                    gotToNextPage={() => onChangePage(currentPage + 1)}
                    goToPreviousPage={() => onChangePage(currentPage - 1)}
                    goToCustomPage={(page: number) => onChangePage(page)}
                />
            </div>

            <CategoryFilter
                categories={categories}
                selectedCategories={filters.categories}
                onChangeCategory={onChangeCategory}
            />
        </div>
    );
}
