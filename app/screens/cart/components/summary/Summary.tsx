import type { FC } from 'react';
import { Button, Link } from '@components';

interface SummaryProps {
    total: number;
}

export const Summary: FC<SummaryProps> = ({ total }) => {
    const summaryItems = [
        {
            label: 'Subtotal',
            value: Number(total).toFixed(2),
        },
        {
            label: 'Shipping',
            value: Number(20).toFixed(2),
        },
        {
            label: 'Total',
            value: Number(total + 20).toFixed(2),
        },
    ];

    return (
        <div className="w-[352px] h-[376px] flex flex-col border border-primary rounded-2xl p-6 gap-6">
            <div className="flex flex-col gap 3">
                {summaryItems.map((si, index) => {
                    return (
                        <div
                            className="flex flex-row justify-between "
                            key={index}
                        >
                            <p className="pSmaller">{si.label}</p>
                            <p className="pSmaller">${si.value}</p>
                        </div>
                    );
                })}
            </div>

            <Button
                fullWidth
                text="Checkout"
                styles={{ marginTop: '16px' }}
            />

            <div className="flex justify-center">
                <Link text="Or pay with PayPal" />
            </div>

            <hr />

            <div className="flex flex-col">
                <p className="pSmaller">Promo code</p>
                <div className="flex flex-row  gap-3">
                    <input
                        className="border border-primary text-slate-500 rounded-md px-4 py-2"
                        type="text"
                        placeholder="Enter code"
                    />

                    <Button text="Apply" />
                </div>
            </div>
        </div>
    );
};
