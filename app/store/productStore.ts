import { create } from 'zustand';

export interface ProductItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    images: string[];
}

interface ProductStore {
    products: ProductItem[];
    addItem: (item: Omit<ProductItem, 'quantity'>) => void;
    removeProduct: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    addItem: (item) =>
        set((state) => {
            const existing = state.products.find(
                (product) => product.id === item.id
            );

            if (existing) {
                return {
                    products: state.products.map((product) =>
                        product.id === item.id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    ),
                };
            }

            return { products: [...state.products, { ...item, quantity: 1 }] };
        }),

    removeProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),

    updateQuantity: (id, quantity) =>
        set((state) => ({
            products: state.products.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity + quantity }
                    : product
            ),
        })),
}));
