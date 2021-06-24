import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cards from './Components/Cards/Cards';


function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <HeroSection/>
    <Cards/>

    </Router>
    </>
  );
}

export default App;
