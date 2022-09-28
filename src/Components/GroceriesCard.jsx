import React from 'react'
import { useDispatch } from 'react-redux';
import "../Styles/Groceries.css"

const GroceriesCard = ({ item }) => {

  return (
    <div className='single-product'>
      <div className='img-box'>
        <img className='product-img' src={item.image1} alt="img" />
      </div>
      <div className='title-box'>
        <h3 className='product-title'>{item.name}</h3>
      </div>
      <div className='mrp-box'>
         M.R.P:<strike className="price">₹ {item.mrp} </strike> <span className='price'>₹ {item.price} </span> 
      </div>
      <div className='btn-box'>
        <button className='btn-cart' > Add to Cart </button>
      </div>
    </div>
  )
}

export default GroceriesCard;