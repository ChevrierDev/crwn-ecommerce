import { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { NavigationContainer, NavLink, LogoContainer, NavLinks } from './navigation-styles.jsx';

import { selectCurrentUser } from '../../store/user/user.selector.js';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

import { signOutStart } from '../../store/user/user.action.js';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isDropdown = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart())

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