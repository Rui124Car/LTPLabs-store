import { Button } from '~/components';

import { useProductStore, type ProductItem } from '@store';
import type { FC } from 'react';

import './product.css';

import Plus from '../../../../icons/plus.svg';
import Minus from '../../../../icons/Minus.svg';
import Garbage from '../../../../icons/Garbage.svg';
import { useShallow } from 'zustand/shallow';

interface ProductInjectedProps {
    images: string[];
    onAdd: () => void;
    onRemove: () => void;
    onClear: () => void;
}

export const Product: FC<ProductItem & ProductInjectedProps> = ({
    id,
    title,
    price,
    quantity,
    images,
    onAdd,
    onRemove,
    onClear,
}) => {
    return (
        <div className="flex flex-row gap-6">
            <img
                src={images[0]}
                alt={title}
                width={156}
                height={156}
            />

            <div className="flex flex-col gap-[81px]">
                <div className="flex flex-col">
                    <p className="pSmaller">{title}</p>
                    <p className="pSmaller">${price}</p>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="min-w-[96px] flex flex-row border border-primary rounded-2xl px-3 py-2 gap-2 justify-center">
                        <img
                            src={Plus}
                            width={16}
                            height={16}
                            onClick={onAdd}
                        />

                        <p className="pSmaller">{quantity}</p>

                        <img
                            src={Minus}
                            width={16}
                            height={16}
                            onClick={onRemove}
                        />
                    </div>

                    <img
                        src={Garbage}
                        width={24}
                        height={24}
                        onClick={onClear}
                    />
                </div>
            </div>
        </div>
    );
};
