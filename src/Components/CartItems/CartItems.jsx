import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const {all_Posts, cartItems, removeFromCart,getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className='cartItem'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_Posts.map((e) =>{
        if(cartItems[e.id] > 0)
        {
            return <div>
                        <div className="cartItems-format cartItems-format-main">
                            <img src={e.image} alt='' className='cartItems-product-icon'/>
                            
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            
                            <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                            
                            <p>${e.new_price * cartItems[e.id]}</p>
                            
                            <img className='cartIcon-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
                        
                        </div>
                        <hr />
                    </div>
        }
        return null
      })}

      <div className="cartItem-down">
          <div className="cartItems-total">
            <h1>Cart Totals</h1>
          

          <div className="cartItems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>

          <div className="cartItems-total-item">
            <p>Shopping Fee</p>
            <p>Free</p>
          </div>
          <hr/>

          <div className="cartItem-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          

           <button>PROCEED TO CHECKOUT</button>
       </div>
       
     <div className="cartItem-promoCode">
        <p>If you have a promo code, Enter it here</p>
         <div className="cartItems-promoBox">
           <input type='text' placeholder='promo code'/>
           <button>Submit</button>
         </div>
       </div>
    </div>
    </div>
  )
}

export default CartItems