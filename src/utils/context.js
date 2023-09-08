import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    //const [showCart, setShowCart] = useState(false);
   // const [cartItems, setCartItems] = useState([]);
   // const [cartCount, setCartCount] = useState(0);
   //const [cartSubTotal, setCartSubTotal] = useState(0);
    //const location = useLocation();

    

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
