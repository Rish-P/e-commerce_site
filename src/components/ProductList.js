import React, {Component} from 'react';
import Title from './Title'
import {ProductConsumer} from '../context';
import Product from "./Product";

class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className="container">
                        <Title name="Our" title="Products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return(
                                        value.products.map(p=>{
                                            return(
                                                <Product product={p} key={p.id}/>
                                            )
                                        })
                                    )
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Productlist;