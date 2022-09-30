// ***** this is for the groceries card component
import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Groceries.css"

const GroceriesCard = ({ item, productData }) => {

  return (
    <div className='single-product'>
      <Link to={`/groceriesproducts/${productData.id}`}>
        <div className='img-box'>
          <img className='product-img' src={item.image1} alt="img" />
        </div>
        <div className='title-box'>
          <h3 className='product-title'>{item.name}</h3>
        </div>
        <div className='mrp-box'>
          M.R.P:<strike className="price">₹ {item.mrp} </strike> <span className='price'>₹ {item.price} </span> 
        </div>
      </Link>
      <div className='btn-box'>
        <button className='btn-cart' > Add to Cart </button>
      </div>
    </div>
  )
}

export default GroceriesCard;