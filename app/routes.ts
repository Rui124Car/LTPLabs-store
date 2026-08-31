import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('screens/home/home.tsx'),
    route('product/:id', 'screens/productDetail/productDetail.tsx'),
    route('cart', 'screens/cart/cart.tsx'),
] satisfies RouteConfig;
