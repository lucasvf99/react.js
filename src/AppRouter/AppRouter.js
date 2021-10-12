import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ContacPage from '../pages/ContacPage'
import NotFoundPage from '../pages/NotFoundPage'
import NavBar from '../components/NavBar/NavBar'
import ListProductConteiner from '../components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from '../components/ItemDetailConteiner/ItemDetailConteiner'
import CartPage from '../pages/CartPage'

//Context
import { ThemProvider } from '../Context/themContext'
import {CartProvider} from '../Context/CartContext'

export default function AppRouter () {
    return (
        <BrowserRouter>
                <ThemProvider>   
               
                        <NavBar/>
                        <Switch>     
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/contacto" component={ContacPage}/>          
                            <Route exact path="/category/:catId" component={ListProductConteiner}/>
                            <Route exact path ="/product/:productId" component={ItemDetailConteiner }/>                       
                            <Route exact path ="/cart" component={CartPage}/>
                            <Route  exact path="*" component={NotFoundPage} />
                        </Switch>
                </ThemProvider>

         </BrowserRouter>

    )
    
}