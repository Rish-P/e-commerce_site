import React, {Component} from 'react';
import {storeProducts,detailProduct} from "./data";
import swal from 'sweetalert'

const ProductContext = React.createContext();
 //provider-provides the info that is used thru the whole hierarchy
//consumer-receives the data
export default class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setProducts()
    }
    increment= (id)=>{
        let tempCart = [...this.state.cart]
        const index=tempCart.indexOf(this.getItem(id))
        const product = tempCart[index]
        product.count+=1;
        product.total=product.price*product.count;
        this.setState({cart:[...tempCart]},()=>{
            this.calculations()
        });
    }
    decrement= (id)=>{
        let tempCart = [...this.state.cart]
        const index=tempCart.indexOf(this.getItem(id))
        const product = tempCart[index]
        if(product.count>0){
            product.count-=1;
        }
        else{
            swal("Quantity is always greater than one!",{
                icon:'info',
                buttons:['Got it'],
                color:'red-bg'
            })
        }
        product.total=product.price*product.count;

        this.setState({cart:tempCart},()=>{
            this.calculations()
        });
    }
    removeItem = (id) =>{
        let tempCart = [...this.state.cart]
        let tempProducts = [...this.state.products]
        tempCart = tempCart.filter(item=>item.id!==id)
        const index = tempProducts.indexOf(this.getItem(id))
        let product = tempProducts[index];
        const count = product.count;
        const total= product.total;
        const price=product.price;
        product.inCart=false;
        product.count=0;
        product.total=0;
        if(tempCart.length===0){
            this.state.cartSubTotal=0;
            this.state.cartTax=0
            this.state.cartTotal=0
        }else{
            this.state.cartSubTotal-=count*price;
            this.state.cartTax-=(total-price)
            this.state.cartTotal-=total
        }
        tempProducts[index]=product

        this.setState({cart:[...tempCart],products:[...tempProducts]},()=>{
            this.calculations();
        })
    }

    setProducts = () =>{
        let tempProducts = []
        storeProducts.forEach(item=>{
            const singleItem = {...item}
            tempProducts=[...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }

    getItem = (id) => {
        const product= this.state.products.find(item=>item.id===id)
        return product;
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index=tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart=true;
        product.count = 1;
        product.total=product.price*product.count
        this.setState({products:tempProducts,cart:[...this.state.cart,product]},()=>{
            this.calculations();
        });

    }
    openModal = (id) =>{
        const product = this.getItem(id);

        this.setState(()=>{
            return {modalProduct: product,modalOpen:true}
        })
    }
    closeModal =() =>{
        this.setState(()=>{
            return {modalOpen: false }
        })
    }
    calculations = () => {
        let sub = this.state.cartSubTotal;
        this.state.cart.map(item=>sub+=item.total
        )
        const tax = 0.18*sub;
        const finalTotal = sub + tax;
        this.setState({cartSubTotal:sub,cartTax:tax,cartTotal:finalTotal})
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal: this.openModal,
                closeModel: this.closeModal,
                increment: this.increment,
                decrement:this.decrement,
                removeItem: this.removeItem,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const {Consumer} = ProductContext;
const ProductConsumer = Consumer;
export {ProductConsumer};
