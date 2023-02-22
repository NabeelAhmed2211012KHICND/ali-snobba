import React from 'react';

function Cart() {
  return (
    <div className='product-items-container'>
      <div className='product-item-row'>
        <div className='product-image'>
          <img src='https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/ActualRubyRubySlippers.jpg' alt='product' />
        </div>
        <div className='product-title'>
          <h1>Product Name</h1>
          <p>Product Description</p>
        </div>
        <div className='product-count'>
          <i className='fa fa-minus minus'></i>
          <input type='text' className='count-input' placeholder='2' />
          <i className='fa fa-plus plus'></i>
        </div>
        <div className='price'>
          <h3>$34876</h3>
        </div>
        <div className='description'>
          <p>Product Details</p>
        </div>
        <button className='button'>Add to Cart</button>
      </div>
    </div>
  );
}

export default Cart;
