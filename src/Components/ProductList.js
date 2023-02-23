import React, { useEffect, useState } from 'react'
import Product from './Product'
import './productList.css'

function ProductList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/product/getproduct")
            .then((response) => response.json())
            .then((result) => setData(result));
    }, [])


    return (
        <div>
            <h1>*** Product Listing Page ***</h1>
            {data.length !== 0 ? data.map((item) => {
                return <Product item={item} />
            }) : null}
        </div>
    )
}

export default ProductList