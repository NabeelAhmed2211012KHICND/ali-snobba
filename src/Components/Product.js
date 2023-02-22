import { useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
const Product=({item})=>{
    const [quantity,setQuantity] = useState(1);
    const d_quantity=()=>{
        if(quantity > 1){
            setQuantity(prev=> prev-=1)
        }
    }

    const i_quantity=()=>{
        setQuantity(prev=>prev+=1);
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
                    <button>+ add to cart</button>
                </div>
            </div>
        </div>
    );
}
export default Product;