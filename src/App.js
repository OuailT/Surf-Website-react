import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <HeroSection/>
    </Router>
    </>
  );
}

export default App;
