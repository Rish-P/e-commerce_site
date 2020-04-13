import React from 'react'
import bin from '../../phone-pics/trash(1).png'

const CartItem = ({item,value}) =>{
    const {id,title,img,price,total,count}= item;
    const {increment,decrement,removeItem} = value;
    return(
        <div className='row text-capitalize '>
            {/*product image,price,and title*/}
            <div className='col-8 float-left col-lg-2 mb-5'>
                <img src={img} style={{height:'5rem',width:'5rem'}} className='img-fluid ml-4' alt="product"/>
            </div>
            <div className='col-8 ml-7 col-lg-2 mt-3'>
                <p>{title}</p>
            </div>
            <div className='col-8 ml-6 col-lg-2 mt-3' style={{marginLeft:'5px'}}>
                <p>${price}</p>
            </div>
            {/*the removeitem,qty buttons and total price */}
            <div className='col-5 col-md-2 mr-10'>
                <div className=''>
                    <span className='btn btn-success btn-sm mt-2' onClick={()=>{decrement(id)}}> - </span>
                    <span className='ml-2 mr-2 mt-7' style={{color:'orange',fontSize:'1.2rem'}}>{count}</span>
                    <span className='btn btn-success btn-sm mt-2' onClick={()=>{increment(id)}}> + </span>
                </div>
            </div>
            <div className='col-10 col-lg-2' >
                <div className='row'>
                    <div>
                        <img src={bin} alt='store' className='ml-5' onClick={()=>{
                            removeItem(id);
                        }}/>
                    </div>
                </div>
            </div>
            <span >
                    <strong className='mb-10 ml-10'> Final Price : ${total}</strong>
                </span>
        </div>
    )

}
export default CartItem;