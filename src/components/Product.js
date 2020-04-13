import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {ProductConsumer} from "../context";
import cartimg from '../supermarket.png'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import swal from 'sweetalert'

class Product extends Component {
    render() {
        const cardContainer={
            width:'100%',
            display: 'inline-block',
            justifyContent:'space-around',
            alignItems:'center',
            height:'40vh',
            margin:'10px 10px',
            backgroundColor:'rgb(211,211,211)',


        }
        const {id,title,img,price,inCart} = this.props.product;//declaring variables for each property of the mobile
        return (
            <div className="col-9 mx-auto col-md-4 col-lg-3 my-3">
                <StyledDiv >
                    <ProductConsumer>
                        {value => (
                    <div style={cardStyle}
                         onClick={()=>{
                             value.handleDetail(id)
                         }}
                            className="img-container">
                        <Link to="/details">
                            <img src={img} alt="store" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart?true:false}
                        onClick={()=>{
                            value.addToCart(id)
                            {swal(title+" has been added to Cart","Price :- $"+price,
                              {
                                buttons:['Continue Shopping','OK'],
                                  className:'blue-bg',
                                  timer:10000,
                                  icon:'success'
                            })}

                        }} style={btnstyle}>
                            {inCart?(<p className="text-capitalize mb-0 py-0" disabled={""}>In cart</p>):<img src={cartimg} alt="store"/> }
                        </button>
                    </div>
                            )}
                    </ProductConsumer>
                    <div className='card-footer d-flex justify-content-between' style={style1}>
                        <p className="align-items-center">{title}</p>
                        <h6 className="mb-0">
                            <span style={styleprice}>$ {price}</span>
                        </h6>
                    </div>
                </StyledDiv>
            </div>
        );
    }
}

Product.propTypes ={
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
const cardStyle = {
    position: 'relative',
    background: 'white',
    width: '225px',
    height: '42vh',
    padding: '1.6rem',
    color: 'rgba(206,62,255,0.5)',
    boxShadow: '0 .25rem .25rem rgba(0,0,0,0.2),0 0 1rem rgba(0,0,0,0.2)',
    overflow: 'hidden'
}
const btnstyle={
    backgroundColor:'rgb(131,255,212)',
    marginTop:'20px',
    fontSize:'1.1rem',
    border:'0.5px solid gray',
    display:'flex',
    justifyContent: 'space-around',
    borderRadius: '5px',
    cursor:'pointer',
    color:'gray',
    float:'left'
}
const style1={
    height:'5vh',
    width:'225px'
}
const styleprice={
    fontFamily:'Helvetica'
}
const StyledDiv=styled.div`
.card{
transition: all 0.7s linear;
}
.card-footer{
background:transparent;
border-top: transparent;
transition: all 0.7s linear;
}
&:hover{
.card{
border: 0.04rem solid rgba(0,0,0,0.2);
box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}
.card-footer{
background:rgb(247,247,247);
}
}

.img-container{
position:relative;
overflow:hidden;
}
.img-container:hover .card-img-top{
transform: scale(1.2);
}
.card-img-top{
transition: all 0.7s linear;
}
 // .cart-btn{
 // position:absolute;
 // bottom: 0rem;
 // right: 0rem;
 // padding: 0.2rem 0.5rem;
 // color:white;
 // border-radius: 0.5px 0 0 0;
 // transform: translate(100%,100%);
 //   transition: all 0.7s linear;
 // }
 //
 // img-container:hover .cart-btn{
 // transform:translate(0,0);
 }
 .swal-overlay {
  background-color: rgba(43, 165, 137, 0.45);
}
`





export default Product;