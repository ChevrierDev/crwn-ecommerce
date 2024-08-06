import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';


const CartIcon = () => {

    const { isDropdown, setIsDropdownOpen, cartCount } = useContext(CartContext);


    const toggleIsCartOpen = () => setIsDropdownOpen(!isDropdown)
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
