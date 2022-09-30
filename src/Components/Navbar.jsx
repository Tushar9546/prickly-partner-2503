import React, { useEffect } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaUser} from "react-icons/fa"
import Style from "./Navbar.module.css"
import {BsFillCartFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"
import {AiOutlineDown} from "react-icons/ai"
import {Link, useSearchParams} from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
import {useDisclosure, Drawer, DrawerOverlay,DrawerContent,DrawerCloseButton, DrawerHeader, DrawerBody, Input, Button, Menu, MenuList, MenuItem, MenuButton} from "@chakra-ui/react"


export const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
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
        <GiHamburgerMenu className={Style.hambueger} onClick={onOpen} />
        <Drawer style={{color:"white"}}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
       
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{backgroundColor:"#008ecc"}}>
            <div className={Style.drawerslide}>
               <h2>Hello, Sign in</h2>
               <div className={Style.buttnslider}>
               <Button >Account</Button>
               <Button>Orders</Button>
               </div>

            </div>
          </DrawerHeader>

          <DrawerBody>
            <div className={Style.divone}>
           <div>Home</div>
           <div>Shop by Category</div>
           <div>My List</div>
           <div>JioMart Wallet</div>
           <div>JioMart Gift Store</div>
           <div>JioMart Gift Card</div>
           <div>GoGreen with JioMart</div>
           <div>All Offers</div>
           </div>

           <div  className={Style.silverdiv}></div>

           <div className={Style.divone}>
           <div>My Account</div>
           <div>Need Help</div>
           <div>About us</div>
           <div>Guide</div>
           </div>

           <div  className={Style.silverdiv}></div>

           <div className={Style.contactus}>
           <h1> CONTACT US</h1>
           <div>
            WhatsApp us : <span style={{color:"#008ecc"}}>70003 700003</span>
           </div>

           <div>
            Call us : <span style={{color:"#008ecc"}}>1800 890 1222</span>
           <p> 8:00Am to 8:00PM, 365 days</p>
           </div>

           <div>
          <p style={{fontSize:"13px"}} > Please note that you are accessing the BETA Version of <span style={{color:"#008ecc", fontSize:"13px"}}>www.jiomart.com</span></p>
           </div>

           <div>
          <p style={{fontSize:"13px"}} >Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on  <span style={{color:"#008ecc", fontSize:"13px"}}>cs@jiomart.com</span></p>
           </div>
           </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
       
       
        <div>
          <Link to={"/"}>
            <img width="110px" src="https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg" />
            </Link>
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
          <div className={Style.locationdiv} >Deliver to <span className={Style.spanstyle} style={{color:"black", fontWeight:"600", fontSize:"14px"}} >400020</span>
          </div>
        </div>

          {/* menu */}
          <Menu isLazy>
            <MenuButton> <div className={Style.navbar2style1}>
            <p>Groceries</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
       </MenuButton>
         
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuList style={{backgroundColor:"#f2e8e8"}}>

      <MenuItem><Link to={"/groceriesproducts"}>Groceries</Link>

     </MenuItem>
      <MenuItem>Dairy & Bakery</MenuItem>
      <MenuItem>Staples</MenuItem>
      <MenuItem>Snacks & Branded Foods</MenuItem>
      <MenuItem>Beverages</MenuItem>
      <MenuItem>Personal Care</MenuItem>
    </MenuList>
  
         </Menu>



        <Menu isLazy>
          <MenuButton>
         <div className={Style.navbar2style1}>
            <p>Premium Fruits</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
         </MenuButton>
     
         <MenuList style={{backgroundColor:"#f2e8e8"}}>
          <MenuItem>Apples & Pears</MenuItem>
          <MenuItem>Avocada, Peach , Plum</MenuItem>
          <MenuItem>Banana, Melons & Coconut</MenuItem>
          <MenuItem>Fruits</MenuItem>
          <MenuItem>Citrus, Mango & Grapes</MenuItem>
          <MenuItem>Dates</MenuItem>
          <MenuItem>Gift, Assorted & XL Packs</MenuItem>
          <MenuItem>Oragnic</MenuItem>
          <MenuItem>Pomegranate, Papaya & Pineapple</MenuItem>
          <MenuItem>Seasonal & Minor Fruits</MenuItem>
         </MenuList>
      </Menu>

       <Menu isLazy>
        <MenuButton>
         <div className={Style.navbar2style1}>
            <p>Home & Kitchen</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
         </MenuButton>
         <MenuList style={{backgroundColor:"#f2e8e8"}}>
          <MenuItem>Kitcehnware </MenuItem>
          <MenuItem>Dining</MenuItem>
          <MenuItem>Furnishing</MenuItem>
          <MenuItem>Home Decor</MenuItem>
          <MenuItem>Garden & Outdoor</MenuItem>
          <MenuItem>Pooja Needs</MenuItem>
          <MenuItem>Bathroom & Laundry</MenuItem>
          <MenuItem>Home Appliances</MenuItem>
          <MenuItem>Accessories</MenuItem>
          <MenuItem>Stationery</MenuItem>
          <MenuItem>Auto Care</MenuItem>
          <MenuItem>Packing Supplies</MenuItem>
          <MenuItem>Supplies</MenuItem>
          <MenuItem>Toys, Games & Fitness</MenuItem>
         </MenuList>
         </Menu>

           <Menu isLazy>
            <MenuButton>
            <div className={Style.navbar2style1}>
            <p>Fashion</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
         </MenuButton>
       <MenuList style={{backgroundColor:"#f2e8e8"}}>
      <MenuItem>Men</MenuItem>
      <MenuItem><Link to={"/fashion/women"}>Women</Link> </MenuItem>
      <MenuItem>Boys</MenuItem>
      <MenuItem>Girls</MenuItem>
      <MenuItem>Infants</MenuItem>
    </MenuList>
    </Menu>



         <Menu isLazy>
          <MenuButton>
         <div className={Style.navbar2style1}>
            <p>Electronics</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
         </MenuButton>
         <MenuList style={{backgroundColor:"#f2e8e8"}}>
          <MenuItem>Mobiles & Tables</MenuItem>
          <MenuItem>TV & Speaker</MenuItem>
          <MenuItem>Home Appliances</MenuItem>
          <MenuItem>Computers</MenuItem>
          <MenuItem>Cameras</MenuItem>
          <MenuItem>Kitchen Appliances</MenuItem>
          <MenuItem>Personal Care & Grooming</MenuItem>
          <MenuItem>Smart Devices</MenuItem>
          <MenuItem>Gaming</MenuItem>
          <MenuItem>Accessories</MenuItem>
          <MenuItem>Phones</MenuItem>
          <MenuItem>office Products</MenuItem>
          <MenuItem>health Care Devices</MenuItem>
        </MenuList>
         </Menu>


       <Menu isLazy>
        <MenuButton>
         <div className={Style.navbar2style1}>
            <p>Beauty</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
         </MenuButton>
         <MenuList style={{backgroundColor:"#f2e8e8"}}>
          <MenuItem>Make-Up</MenuItem>
          <MenuItem>hair</MenuItem>
          <MenuItem>Skin Care</MenuItem>
          <MenuItem>Fragrances</MenuItem>
          <MenuItem>Personal care</MenuItem>
          <MenuItem>Mom & Baby</MenuItem>
          <MenuItem>Men's Growing</MenuItem>
          <MenuItem>Tools & Appliances Devices</MenuItem>
          <MenuItem>Covid Essentials</MenuItem>
          <MenuItem>Wellness</MenuItem>
          <MenuItem>Fitness</MenuItem>
          <MenuItem>Ayush Products</MenuItem>
          <MenuItem>Treatments</MenuItem>
        </MenuList>
        </Menu>


         <Menu isLazy>
          <MenuButton>
         <div className={Style.navbar2style1}>
            <p>Jewellery</p>
            <AiOutlineDown style={{color:"gray"}} />
         </div>
         </MenuButton>
         <MenuList style={{backgroundColor:"#f2e8e8"}}>
      <MenuItem>Fine Jewellery</MenuItem>
      <MenuItem>Jewellery</MenuItem>

    </MenuList>
    </Menu>
         
       </div>

     
    </div>

  )
}
