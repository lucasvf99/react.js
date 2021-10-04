import React, { useEffect } from 'react'
import ItemDetailConteiner from '../components/ItemDetailConteiner/ItemDetailConteiner'
import { useParams } from 'react-router-dom'

export default function ProductDetailPage (){
    const {productId} = useParams
    return (
        <>
            <p>Id de producto = {productId}</p>
            <ItemDetailConteiner/>
        </>
    )
}