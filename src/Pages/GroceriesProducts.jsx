import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GroceriesCard from '../Components/GroceriesCard';

import { getGroceriesProducts } from '../Redux/Groceries/action';
import "../Styles/Groceries.css";

const GroceriesProducts = () => {
  const groceries = useSelector((state) => state.GroceriesReducer.groceries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroceriesProducts())
  }, [])




  return (
    <div className='groceries-container'>
        <div className='top-Section'>
           <p> Home </p> 
           <p> All Categories </p>
           <p> Groceries </p>
        </div>
        <div className='groceries-body'>
            <div className='left'>
   {/* here write code for filtering */}
            </div>
            <div className='right'>
              <div className='top-section-imgcontainer'>
                <img className='title-img' src="https://www.jiomart.com/images/category/2/groceries-20210201.jpeg" alt="TitleImage" />
              </div>
              <div className='right-sorting-container'>
   {/* here write code for Sorting */}
                  Sort by:
              </div>
              <div className='middle-section-parent'>
                <div className='middle-section-heading'>
                     <h3 className='heading'>ALL PRODUCTS</h3>
                </div>
                <div className='middle-section'>
                  {groceries.length>0 && groceries.map((d) => {
                    return (
                      <GroceriesCard key={d.id} item={d} />
                    )
                  })}
                </div>
                <div className='pagination-container'>
                  
                </div>
              </div>

            </div>
        </div>
       
    </div>
  )
}

export default GroceriesProducts;