import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Productlist from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Modal from './components/modal'

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path='/details' component={Details}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/' exact component={Productlist}/>
                    <Route component={Default}/>
                </Switch>

                <Modal/>

                {/*/!*<Productlist/>*!/*/}
                {/*<Details/>*/}
                {/*<Cart/>*/}
                {/*<Default/>*/}
            </React.Fragment>
        )
    }
}

export default App;