import { createContext, useState } from "react";

export const CartContext = createContext({
    isDropdown: false,
    setIsDropdownOpen: () => { }
});

export const CartProvider = ({ children }) => {
    const [isDropdown, setIsDropdownOpen] = useState(false);
    const value = { isDropdown, setIsDropdownOpen };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
