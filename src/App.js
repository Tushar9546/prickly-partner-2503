import logo from './logo.svg';
import './App.css';
import GroceriesProducts from './Pages/GroceriesProducts';
import { useSelector } from 'react-redux';

function App() {
  
  return (
    <div className="App">
      <GroceriesProducts />
    </div>
  );
}

export default App;
