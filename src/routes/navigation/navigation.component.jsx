import { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom";

import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, NavLink, LogoContainer, NavLinks } from './navigation-styles.jsx'

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isDropdown } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks className='nav-links-container'>
                    <NavLink className='nav-link' to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <NavLink className='nav-link' to='/auth'> SIGN IN </NavLink>
                        )
                    }

                    <CartIcon />
                </NavLinks>
                {isDropdown && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation