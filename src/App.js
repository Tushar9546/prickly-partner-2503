import logo from './logo.svg';
import './App.css';
import GroceriesProducts from './Pages/GroceriesProducts';
import { useSelector } from 'react-redux';
import { Navbar } from './Components/Navbar';
import { MainPage } from './Pages/MainPage';
import MobileTablet from './Components/Electronics/MobileTablet';

function App() {
  
  return (
    <div className="App">

      <GroceriesProducts />

     <Navbar/>
     <MainPage/>
     <MobileTablet />
    </div>
  );
}

export default App;
