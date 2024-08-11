import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';


const CartIcon = () => {

    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isDropdown = useSelector(selectIsCartOpen)


    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isDropdown))
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
