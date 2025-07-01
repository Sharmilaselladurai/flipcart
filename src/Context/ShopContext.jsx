import React, {createContext, useState} from "react";
import all_Posts from '../Components/Assets/all_product'



export const ShopContext = createContext(null)   //create the context initialized with null

const getDefaultCart  = () =>{
        let cart = {};
        for (let index = 0; index < all_Posts.length +1; index++){
              cart[index] = 0;
        }
        return cart
    }

const ShopContextProvider = (props)=>{

    const[cartItems , setCartItem] = useState(getDefaultCart())

    
    const addToCart = (itemId) =>{
        setCartItem((prev) => ({ ...prev,[itemId] : prev[itemId] + 1 }))
        
    }

    const removeFromCart = (itemId) =>{
        setCartItem((prev) => ({ ...prev,[itemId] : prev[itemId] - 1 }))
        
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0
        for(const item in cartItems)
        {
            let itemInfo = all_Posts.find((post)=>post.id === Number(item))
             
            if (itemInfo) {
            totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () =>{
        let totalItem = 0
        for (const item in cartItems){
            
            if(cartItems[item] > 0)
                {
                totalItem += cartItems[item]
                }
        }
        return totalItem
    }

    const contextValue = {all_Posts,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )




}

export default ShopContextProvider;
