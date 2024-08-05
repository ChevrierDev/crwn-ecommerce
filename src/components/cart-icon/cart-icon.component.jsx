import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';


const CartIcon = () => {

    const { isDropdown, setIsDropdownOpen, cartCount } = useContext(CartContext);


    const toggleIsCartOpen = () => setIsDropdownOpen(!isDropdown)
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;
