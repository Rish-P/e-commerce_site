import React, {Component} from 'react';
import {ProductConsumer} from "../../context";

class CartColumns extends Component {
    render() {
        return (
            <div className='container-fluid mx-auto d-none d-lg-block' style={{fontWeight:'bold',textDecoration:'underline'}}>
                <div className='row mx-auto text-uppercase mt-10' >
                    <div className='col-10 mx-auto col-lg-2 mr-7  font-weight-bold'>
                        <h5>Product</h5>
                    </div>
                    <div className='col-10 mx-auto col-lg-2 ml-3 font-weight-bold '>
                        <h5>Name</h5>
                    </div>
                    <div className='col-10 mx-auto col-lg-2 ml-3 font-weight-bold'>
                        <h5>Price</h5>
                    </div>
                    <div className='col-10 mx-auto col-lg-2 ml-6 font-weight-bold'>
                        <h5>Quantity</h5>
                    </div>
                    <div className='col-10 mx-auto col-lg-2 ml-3 font-weight-bold'>
                        <h5>Remove</h5>
                    </div>
                    <div className='col-10 mx-auto col-lg-2 font-weight-bold'>
                        <h5>Total</h5>
                    </div>

                </div>

            </div>
        );
    }
}

export default CartColumns;