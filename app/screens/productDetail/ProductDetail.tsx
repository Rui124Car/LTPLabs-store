import { Button } from '@components';
import type { Route } from './+types/ProductDetail';

import './productDetail.css';

import { getProductById } from '@services';

import { useProductStore } from '@store';
import { useShallow } from 'zustand/shallow';

export async function loader({ params }: Route.LoaderArgs) {
    const details = await getProductById(params.id);

    return { details };
}

export default function ProductDetail({ loaderData }: Route.ComponentProps) {
    const { details } = loaderData;
    const { addToCart } = useProductStore(
        useShallow((state) => ({
            addToCart: state.addItem,
        }))
    );

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-12">
                <img
                    width={700}
                    height={400}
                    src={details.images[0]}
                    alt={details.title}
                />

                <div className="flex flex-col gap-4">
                    <p>{details.title}</p>
                    <p>${details.price}</p>

                    <Button
                        text="Add to Cart"
                        onClick={() => addToCart(details)}
                        fullWidth
                    />

                    <hr />

                    <p className="description">{details.description}</p>
                </div>
            </div>
        </div>
    );
}
