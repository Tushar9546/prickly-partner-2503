

import './App.css';
import GroceriesProducts from './Pages/GroceriesProducts';

import { Navbar } from './Components/Navbar';
import { MainPage } from './Pages/MainPage';
import MobileTablet from './Components/Electronics/MobileTablet';


// import "./App.css";
// import GroceriesProducts from "./Pages/GroceriesProducts";

// import { Navbar } from "./Components/Navbar";
// import { MainPage } from "./Pages/MainPage";


function App() {
  return (
    <div className="App">


      {/* <GroceriesProducts /> */}

     <Navbar/>
     <MainPage/>
     <MobileTablet />

    

    </div>
  );
}

export default App;
