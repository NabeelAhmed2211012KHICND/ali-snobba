import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './product.css';
const Product=({item})=>{
    const [quantity,setQuantity] = useState(1);
    const navigate = useNavigate();
    const d_quantity=()=>{
        if(quantity > 1){
            setQuantity(prev=> prev-=1)
        }
    }

    const i_quantity=()=>{
        setQuantity(prev=>prev+=1);
    }
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
    return(
        <div className='product-items-container '>
            <div className='product-item-row'>
                <div className='product-image'>
                    <img src={item.imageLink} alt={item.name} />
                </div>
                <div className='product-title'>
                    <Link to={`/details/${item.id}`}>  
                        <h1>{item.name}</h1>
                    </Link>
                    <p>{item.shortDiscription}</p>
                </div>
                <div className='product-count'>
                    <i className='fa fa-minus minus' onClick={d_quantity}></i>
                    <input type="text" className="box" value={quantity} />
                    <i className='fa fa-plus plus' onClick={i_quantity}></i>
                </div>
                <div className='price'>
                    <h3>
                        Rs {item.price}
                    </h3>
                </div>
                <div className='button'>
                    <button onClick={cart}>+ add to cart</button>
                </div>
            </div>
        </div>
    );
}
export default Product;