
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';



function App() {
  const {isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "Light" : "dark"}`}>

    <Navbar/>
    <Body/>
  
    </div>
  );
}

export default App;
