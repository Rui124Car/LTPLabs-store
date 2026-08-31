import { PRODUCTS_BY_PAGE } from '@consts';

const BASE_URL = 'https://dummyjson.com';

export async function getProducts(page = 0) {
    const res = await fetch(
        `${BASE_URL}/products?limit=${PRODUCTS_BY_PAGE}&skip=${page * PRODUCTS_BY_PAGE}`
    );

    if (!res.ok) throw new Error('Failed to fetch products');

    return res.json();
}

export async function getProductById(id: string) {
    const res = await fetch(`${BASE_URL}/products/${id}`);

    if (!res.ok) throw new Error('Failed to fetch product');

    return res.json();
}

export async function sortProductsByPrice(order: 'asc' | 'desc', page = 0) {
    const res = await fetch(
        `${BASE_URL}/products?sortBy=price&order=${order}&limit=${PRODUCTS_BY_PAGE}&skip=${page * PRODUCTS_BY_PAGE}`
    );

    if (!res.ok) throw new Error('Failed to fetch product');

    return res.json();
}

export async function getCategories() {
    const res = await fetch(`${BASE_URL}/products/categories`);

    if (!res.ok) throw new Error('Failed to fetch categories');

    return res.json();
}

export async function getProductsByCategory(url: string | URL | Request) {
    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch products by category');

    return res.json();
}
