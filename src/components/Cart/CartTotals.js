import React from "react";

 const CartTotals = ({value}) =>{
     const{cartSubTotal,cartTax,cartTotal}= value;
     return (
         <React.Fragment>
             <div className='container float-right' style={{width:'400px',fontFamily: 'Roboto Mono'}}>
                 <div style={{color:'gray'}} >
                    <h4>Cart Details</h4>
                 </div>
                 <div>
                     <h5 className='text-capitalize '> Sub Total : <strong>$ {cartSubTotal}</strong></h5>
                 </div>
                 <div>
                     <h5 className='text-capitalize'> Tax : <strong>$ {cartTax}</strong></h5>
                 </div>
                 <div>
                     <h5 className='text-capitalize'> Total : <strong>$ {cartTotal}</strong></h5>
                 </div>
             </div>
         </React.Fragment>
     )
 }
 export default CartTotals;