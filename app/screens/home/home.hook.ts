import { useSearchParams } from 'react-router';
import type { Route } from './+types/home';

import { useState } from 'react';

import { PRODUCTS_BY_PAGE } from '@consts';

export const useHomeHelper = (page: number, total: number) => {
    const [_, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState<{
        categories: string[];
    }>({
        categories: [],
    });

    const onChangePage = (newPage: number) => {
        setSearchParams((prev) => {
            if (newPage > 1) {
                prev.set('page', newPage.toString());

                return prev;
            }

            prev.delete('page');

            return prev;
        });
    };

    const onChangeCategory = (title: string) => {
        setFilters((prev) => {
            return {
                ...prev,
                categories: prev.categories.includes(title)
                    ? prev.categories.filter((cat) => cat !== title)
                    : [...prev.categories, title],
            };
        });
    };

    const onChangeSortBy = (e: any) => {
        setSearchParams((prev) => {
            prev.delete('page');

            if (e.target.value) {
                prev.set('sortBy', e.target.value);

                return prev;
            }

            prev.delete('sortBy');

            return prev;
        });
    };

    const showingString = `Showing ${PRODUCTS_BY_PAGE * (page - 1) + 1}-${page * PRODUCTS_BY_PAGE > total ? total : page * PRODUCTS_BY_PAGE} of ${total}`;

    return {
        filters,
        showingString,
        onChangePage,
        onChangeCategory,
        onChangeSortBy,
    };
};
