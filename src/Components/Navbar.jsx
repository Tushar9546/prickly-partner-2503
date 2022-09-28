import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaUser} from "react-icons/fa"
import Style from "./Navbar.module.css"
import {BsFillCartFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {AiOutlineDown} from "react-icons/ai"




export const Navbar = () => {

  return (
        // navbar-1
     <div className={Style.navbarblock}>  
    <div className={Style.navbar}>
        <GiHamburgerMenu className={Style.hambueger}/>
        <div>
            <img width="110px" src="https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg" />
        </div>

        <div>
            <input className={Style.inputSearch} placeholder="Search essentials, groceries, and more ..." />
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
  
          <div className={Style.navbar2style2}>
            <p>Groceries</p>
            <AiOutlineDown />
         </div>

         <div className={Style.navbar2style3}>
            <p>Premium Fruits</p>
            <AiOutlineDown />
         </div>

         <div className={Style.navbar2style4}>
            <p>Home & Kitchen</p>
            <AiOutlineDown />
         </div>

         <div className={Style.navbar2style5}>
            <p>Fashion</p>
            <AiOutlineDown />
         </div>

         <div className={Style.navbar2style6}>
            <p>Electronics</p>
            <AiOutlineDown />
         </div>


         <div className={Style.navbar2style7}>
            <p>Beauty</p>
            <AiOutlineDown />
         </div>

         <div className={Style.navbar2style8}>
            <p>Jewellery</p>
            <AiOutlineDown />
         </div>

         
       </div>

     
    </div>

  )
}
