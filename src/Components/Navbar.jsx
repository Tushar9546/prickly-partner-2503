import React, { useEffect } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaUser} from "react-icons/fa"
import Style from "./Navbar.module.css"
import {BsFillCartFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {AiOutlineDown} from "react-icons/ai"
import {useSearchParams} from "react-router-dom"
import { useState } from 'react'
import axios from "axios"



export const Navbar = () => {

 const [searchParam, setSearchParam]= useSearchParams()
  const [query, setQuery] = useState(searchParam.get("q") || "")
   const [data, setData] = useState([])

 const SearchData=(query)=>{
   axios.get(`http://localhost:8080/womens?q=${query}`)
   .then((res)=>{
      console.log(res.data)
      setData(res.data)
   })

 }

  const handleSearch=(e)=>{
  
      setQuery(e.target.value)
     SearchData(e.target.value)
  
  }
console.log(query)
useEffect(()=>{
      setSearchParam({q:query})
},[query])



  return (
        // navbar-1
     <div className={Style.navbarblock}>  
    <div className={Style.navbar}>
        <GiHamburgerMenu className={Style.hambueger}/>
        <div>
            <img width="110px" src="https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg" />
        </div>

        <div>
            <input className={Style.inputSearch} value={query} onChange={handleSearch} placeholder="Search essentials, groceries, and more ..." />
        </div>
        <div className={Style.userdiv}>
        <FaUser className={Style.usericons} />
       <h4>Sign in / Sign up</h4>
        </div>

        <div className={Style.cartNav}>
            <BsFillCartFill className={Style.carticon} />
            <h4>Cart</h4>
        </div>
    </div> 
        {/* navbar-2 */}
        <div id={Style.newnav}>

          <div className={Style.navbar2style1}>
          <MdLocationOn className={Style.locationIcon} />
          <div className={Style.locationdiv} >Deliver to <span style={{color:"black", fontWeight:"600", fontSize:"14px"}} >400020</span>
          </div>
        </div>
  
          <div className={Style.navbar2style1}>
            <p>Groceries</p>
  
            <AiOutlineDown style={{color:"gray"}} />
         </div>

         <div className={Style.navbar2style1}>
            <p>Premium Fruits</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>

         <div className={Style.navbar2style1}>
            <p>Home & Kitchen</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>

         <div className={Style.navbar2style1}>
            <p>Fashion</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>

         <div className={Style.navbar2style1}>
            <p>Electronics</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>


         <div className={Style.navbar2style1}>
            <p>Beauty</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>

         <div className={Style.navbar2style1}>
            <p>Jewellery</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>

         
       </div>

     
    </div>

  )
}
