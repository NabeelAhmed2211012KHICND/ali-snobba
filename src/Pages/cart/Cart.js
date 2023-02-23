import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cartdata from '../../Components/Cartdata';


function Cart() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // let del = 0;
    fetch("http://localhost:9000/cart/getcart")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const handleCart=()=>{
    fetch("http://localhost:9000/cart/all", {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json; charset= UTF-8', }
    }).then(()=>navigate("/thanks"));
  }

  
  return (
    <div>
      {data.length && data.map((d) => {
        return (
          <>
          <Cartdata probs={d} />
          
          </>
        );
      })}
<Link to="/"><button>Return to shopping</button></Link>
<button onClick={handleCart}>Check Out</button>
    </div>
  );
}

export default Cart;
