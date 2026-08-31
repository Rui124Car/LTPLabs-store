import type { FC } from 'react';
import './product.css';

import { useNavigate } from 'react-router';

interface ProductProps {
    id?: number;
    title?: string;
    price?: number;
    image?: string;
}

export const Product: FC<ProductProps> = ({ id, title, price, image }) => {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col gap-3 cursor-pointer"
            onClick={() => navigate(`/product/${id}`)}
        >
            <img
                width={336}
                height={336}
                src={image}
                alt={title}
            />

            <div>
                <p className="letterFont">{title}</p>
                <p className="letterFont">${price?.toFixed(2)}</p>
            </div>
        </div>
    );
};
