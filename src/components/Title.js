import React from "react";
import Product from "./Product";

const style={
    alignItems:'center',
    display:'flex',
    justifyContent:'space-around',
    margin:'22px 350px',
    borderWidth:'50%'
}
const Title = (props) =>{
    return (
        <div >
            <div style={style}>
                <h1 >
                    {props.name} {props.title}
                </h1>
            </div>
        </div>
    )
       // <Product/>
}

export default Title;