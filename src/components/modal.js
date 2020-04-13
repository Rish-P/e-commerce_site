import React, {Component} from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                const {open,close} = value;
                const {img,title,price} = value.modalProduct;
                if(!open){
                    return null;
                }
                else{
                    return(
                        <div>
                        <div className="container">
                            <div className="row">
                                <div style={modal} className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize'>
                                    <h5>Item Added to the Cart</h5>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

                }}
            </ProductConsumer>
        );
    }
}
const modal={
    position:'fixed',
    top:'0',
    left:'0',
    right:'0',
    bottom:'',
    backgroundColor:'rgba(0,0,0,0.3)',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center'
}

export default Modal;