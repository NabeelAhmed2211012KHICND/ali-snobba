import React, { useEffect, useState } from 'react'
import './Cartdata.css'
function Cartdata({ probs, productDelete }) {
   
    //   const addtocart = (data, first) => {
    //     const exist = mycart.find((x) => x.pid === data.pid);
    //     if (exist) {
    //         const newItem = mycart.map((x) =>
    //             x.pid == data.pid && first == 1 ? { ...exist, pqty: exist.pqty + 1 } : x
    //         );
    //         setmycart(newItem);
    //     }
    //     else {
    //         data.pqty = 1;
    //         setmycart([...mycart, data])
    //     }
    // }
    // const removefromcart = (data, r) => {
    //     const exist = mycart.find((x) => x.pid === data.pid);
    //     if (exist) {
    //         const newItem = mycart.map((x) =>
    //             x.pid == data.pid ? { ...exist, pqty: exist.pqty - 1 } : x
    //         );
    //         setmycart(newItem);
    //         if (exist.pqty == 1 || r == 1) {
    //             setmycart(mycart =>
    //                 mycart.filter(item => {
    //                     return item.pid !== exist.pid;
    //                 }))
    //         }
    //     }
    // }
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch("http://localhost:8080/product/" + probs.productId)
            .then((response) => response.json())
            .then((result) => setItem(result));
    }, []);
    const deleteItem = () => {
        fetch("http://localhost:9000/cart/" + probs.id, {
            method: 'DELETE',
        }).then(() => {
            productDelete(probs);
        })
    }





    return (
        <div>
            <table border="1">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th></th>
                </tr>
                <tr>
                    <td><img src={item.imageLink} className='imgpp' /></td>
                    <td>{item.name}</td>
                    <td>{probs.quantity}</td>
                    <td>{item.price}</td>
                    <td>{probs.price}</td>
                    <th><button onClick={deleteItem}>Delete item</button></th>
                </tr>
            </table>
        </div>
    )
};

export default Cartdata;