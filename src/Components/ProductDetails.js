import React,{useEffect, useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import './ProductDetail.css'
const ProductDetails = () => {
    const navigate=useNavigate();
    const cart=()=>{
        const data = {
            productId:item.id,
            quantity:quantity,
            price:quantity*item.price
        };
        fetch("http://localhost:9000/cart/addcart", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset= UTF-8', }
        }).then(()=>navigate("/cart"));
    }
    const [item,setItem] = useState({});
    const param = useParams();
    useEffect(()=>{
        fetch("http://localhost:8080/product/"+param.productID).then((response)=>response.json())
        .then((result)=> setItem(result));
    },[param.productID])
    const [quantity,setQuantity] = useState(1);
    const d_quantity=()=>{
        if(quantity > 1){
            setQuantity(prev=> prev-=1)
        }
    }

    const i_quantity=()=>{
        setQuantity(prev=>prev+=1);
    }
    return (
        <div className="product-main">
            <h1>*** Single Product Page ***</h1>
            <div class="product-row">
             <div className="image">  <img src={item.imageLink}/>  </div>
                <div className="details">   
                
                <h1>{item.name}</h1>
                <p>{item.longDiscription}</p> 
                 
                <h1 className="price">Price: {item.price}</h1>
                <div className='product-count a'>
                    <div>
                    <i className='fa fa-minus minus' onClick={d_quantity}></i>
                    <input type="text" className="box" value={quantity} />
                    <i className='fa fa-plus plus' onClick={i_quantity}></i>
                    </div>
                    
                </div>
                <div className='button'>
                    <button onClick={cart}>+ add to cart</button>
                </div>

                </div>

            </div>
        </div>
    );
}
export default ProductDetails;