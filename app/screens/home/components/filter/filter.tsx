import type { FC } from 'react';

interface FilterProps {
    onChangeSortBy: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Filter: FC<FilterProps> = ({ onChangeSortBy }) => {
    return (
        <div className="flex flex-row justify-between">
            <div>
                <select
                    className="select"
                    onChange={onChangeSortBy}
                    defaultValue=""
                >
                    <option value="">Sort by</option>

                    <option value="asc">Price: Low to High</option>

                    <option value="desc">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};
