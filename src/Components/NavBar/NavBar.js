import React,{useState, useEffect} from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

const NavBar = () =>  {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
               <Link to='/' className="navbar-logo">
                DC
               </Link>

               <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className="nav-item">
                    <Link to='/' className="nav-links">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/' className="nav-links">
                        About
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/' className="nav-links">
                        Our programs
                    </Link>
                </li>

               </ul>
               {button && <Button checkStyle="btn--outline">SIGN-UP</Button>}
            </div>
        </nav>
            
        </>
    )
}

export default NavBar
