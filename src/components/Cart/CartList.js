import React from 'react';
import CartItem from './CartItem'


const CartList = ({value})=>{
    const {cart}= value;
    return(
        <div className='container-fluid'>
            {cart.map(item=>{
                return (
                    <CartItem item={item} value={value} key={item.id}/>
                )
            })}
        </div>
    )

}
export default CartList;