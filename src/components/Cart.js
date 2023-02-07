// import React from 'react'
// // // src/pages/Cart.js
// // import { useSelector } from 'react-redux'
// // src/components/Total.js
// import {useSelector} from 'react-redux'
// import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
// import { useDispatch } from 'react-redux'
import './cart.css'
import Total from './Total'
import CartItem from './CartItem'
// src/pages/Cart.js
import { useSelector } from 'react-redux'

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  return (
   
    <div className="cart">

    <div className="cart__left">
      <div>
        <h3>Shopping Cart</h3>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price} 
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>

      <div className="cart__right">
        <Total/>
      </div>

    </div>
  )
}
