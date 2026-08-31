import { useNavigate } from 'react-router';

import UserIcon from '../../icons/user.svg';
import ShoppingBagIcon from '../../icons/shoppingBag.svg';
import BloomIcon from '../../icons/bloom.svg';
import { useProductStore } from '~/store';
import { useShallow } from 'zustand/shallow';

export const useHeaderHelper = () => {
    const navigate = useNavigate();
    const { products } = useProductStore(
        useShallow((state) => ({
            products: state.products,
        }))
    );

    const headerTitles = [
        { text: 'Home', onClick: () => navigate('/') },
        { text: 'Shop', onClick: () => navigate('/shop') },
        { text: 'Deals', onClick: () => navigate('/deals') },
        { text: 'Contact', onClick: () => navigate('/contact') },
        { text: 'Account', onClick: () => navigate('/account') },
    ];

    const headerIcons = [
        { icon: UserIcon, onClick: () => navigate('/account') },
        {
            icon: ShoppingBagIcon,
            itemsAmount: products.reduce((prev, cur) => {
                return prev + cur.quantity;
            }, 0),
            onClick: () => navigate('/cart'),
        },
        { icon: BloomIcon, onClick: () => navigate('/') },
    ];

    return { headerTitles, headerIcons, goToMainPage: () => navigate('/') };
};
