import { useSearchParams } from 'react-router';
import type { Route } from './+types/home';

import { useState } from 'react';

export const useHomeHelper = () => {
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

    return { filters, onChangePage, onChangeCategory, onChangeSortBy };
};
