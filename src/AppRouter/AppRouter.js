import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContacPage from '../pages/ContacPage'
import NotFoundPage from '../pages/NotFoundPage'
import NavBar from '../components/NavBar/NavBar'
import ProductDetailPage from '../pages/ProductDetailPage'
import ListProductConteiner from '../components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from '../components/ItemDetailConteiner/ItemDetailConteiner'
import CartPage from '../pages/CartPage'

export default function AppRouter () {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>     
                <Route exact path="/" component={HomePage} />
                <Route exact path="/contacto" component={ContacPage}/>          
                <Route exact path="/category/:catId" component={ListProductConteiner}/>
                <Route exact path ="/product/:productId" component={ItemDetailConteiner }/> 
                <Route exact path ="/cart" component={CartPage}/>
                <Route  exact path="*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
    
}