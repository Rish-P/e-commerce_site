import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import img from '../home.png'
import cart from '../supermarket.png'


class Navbar extends Component{
    render(){
        const style={
            display: 'flex',
            justifyContent:'space-around',
            alignItems:'center',
            minHeight:'10vh',
            backgroundColor:'lightblue',
            color:'white',
            fontSize:'1.2rem'
        }
        const styleNav={
            width:'80%',
            display:'flex',
            justifyContent: 'space-around',
            alignItems:'center',
            listStyle:'none',
            color:'black',
            textDecoration:'none',
            fontSize: '1.1rem',
        }
        const btnStyle={
            fontSize: '1.1rem',
            backgroundColor: '#22b2eb',
            width:'130px',
            border:'1px solid black',
            cursor:'pointer',
            padding:'0.2rem 0.5rem',
            transition:'all 0.5s ease-in-out',
            justifyContent:'space-around',
            display:'inline-block',
            alignItems:'center',
            color:'black',
            float:'right'
        }
       return(
           <div className="container">
               <nav style={style}>
                   <Link to="/">
                       <img src={img} alt="store" />
                   </Link>
                   <ul style={styleNav}>
                       <li>
                           <Link to="/" style={styleNav}>
                               <strong>Products</strong>
                           </Link>
                       </li>
                       <li>
                           <Link to="/cart" >
                               <button type='button' className="btn btn-info btn-lg" style={btnStyle}>
                                   <img src={cart} alt="store" />
                                   My Cart
                               </button>
                           </Link>
                       </li>
                   </ul>
               </nav>
           </div>

       )
    }
}

export default Navbar;