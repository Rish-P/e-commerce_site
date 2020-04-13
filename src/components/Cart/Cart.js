import React, {Component} from 'react';
import styled from "styled-components";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from './CartTotals'
import {ProductConsumer} from "../../context";


class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart}=value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <h1 className="text-capitalize text-center mt-4" style={titlestyle}>Your Cart</h1>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        }
                        else
                        {
                            return(
                                        <h1 className=' col-20 text-center text-capitalize' style={{marginTop:'100px'}}>Your Cart is empty!</h1>
                            )
                        }
                    }}

                </ProductConsumer>
            </section>
        );
    }
}
const titlestyle={
    fontFamily:'Helvetica',
    color:'rgb(32,128,164)',
    fontWeight:'bold'
}

export default Cart;