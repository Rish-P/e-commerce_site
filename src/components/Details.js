import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
//add a button styling, REMEMBER
import styled from 'styled-components'

 class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                  const{id,company,img,info,price,title,inCart} =  value.detailProduct;
                  return(
                      <div className="container py-10">
                        <div className="row">
                            <div className="col-30 mx-auto text-center my-5">
                                <h2 className="text-uppercase">{title}</h2>
                            </div>
                        </div>
                          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                              <img src={img} className="img-fluid" alt="product"/>
                          </div>
                          <div className="col-20 mx-auto col-md-6 my-3 text-capitalize">
                                <i style={{color:'blue'}}><h5 >Model Name: {title}</h5></i>
                              <p className=" mt-3 mb-3 ">Brand : {company}</p>
                              <strong style={{color:'Blue',fontFamily:'sans-serif'}}><h5 className='mb-3'> Price : ${price}</h5></strong>
                              <h6 className='mt-2' style={infostyle}><strong>About Product : </strong>{info}</h6>
                              <div className='mt-4'>
                                  <Link to='/'>
                                      <StyledButton style={btn1} className="btn">Back to Home</StyledButton>
                                  </Link>
                                  <StyledButton disabled={inCart?true:false} style={btn1} className="btn"
                                  onClick={()=>{
                                      value.addToCart(id);
                                      value.openModal(id);
                                  }}> Add to Cart</StyledButton>
                              </div>

                          </div>
                      </div>
                  )
                }}
            </ProductConsumer>
        );
    }
}
const btn1={
    backgroundColor: 'rgb(180,90,141)',
    color:'white',
    border:'1px solid black',
    borderRadius:"6px",
    marginLeft:'9px'

}
const infostyle={
     color:'rgba(15,15,15,0.75)'
}
const StyledButton = styled.button`
.btn:hover{
   
}
`

export default Details;