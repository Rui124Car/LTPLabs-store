import { useProductStore } from '@store';
import { useShallow } from 'zustand/shallow';
import { Product, Summary } from './components';

export default function Cart() {
    const { products, updateQuantity, removeProduct } = useProductStore(
        useShallow((state) => ({
            products: state.products,
            updateQuantity: state.updateQuantity,
            removeProduct: state.removeProduct,
        }))
    );

    if (products.length === 0) {
        return <h1 className="text-primary">Cart is empty!</h1>;
    }

    return (
        <div className="flex md:flex-row flex-col gap-12 justify-between">
            <div className="flex flex-1 flex-col gap-4">
                {products.map((product, index) => {
                    return (
                        <div
                            key={product.id}
                            className="flex flex-col gap-4"
                        >
                            <Product
                                key={product.id}
                                onAdd={() => updateQuantity(product.id, 1)}
                                onRemove={() => {
                                    if (product.quantity === 1) {
                                        removeProduct(product.id);
                                        return;
                                    }

                                    updateQuantity(product.id, -1);
                                }}
                                onClear={() => removeProduct(product.id)}
                                {...product}
                            />

                            {index < products.length - 1 && <hr />}
                        </div>
                    );
                })}
            </div>

            <Summary
                total={products.reduce(
                    (prev, cur) => prev + cur.price * cur.quantity,
                    0
                )}
            />
        </div>
    );
}
