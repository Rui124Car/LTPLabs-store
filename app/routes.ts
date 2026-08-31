import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('screens/home/Home.tsx'),
    route('product/:id', 'screens/productDetail/ProductDetail.tsx'),
    route('cart', 'screens/cart/Cart.tsx'),
] satisfies RouteConfig;
