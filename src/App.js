import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { MainPage } from './Pages/MainPage';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainPage/>
    </div>
  );
}

export default App;
