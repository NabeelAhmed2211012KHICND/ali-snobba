import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cartdata from '../../Components/Cartdata';


function Cart() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // let del = 0;
    fetch("http://localhost:9000/cart/getcart")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        // result.forEach(e => {
        //   del += e.price;
        //   setTotalPrice(del);
        // });
      });
  }, []);

  
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
<Link to="/thanks"><button>Check Out</button></Link>
    </div>
  );
}

export default Cart;
