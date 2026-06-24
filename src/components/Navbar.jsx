import Collection from "../pages/Collection";
import { Link } from "react-router-dom";
import '../index.css'
function navbar(){
  
    return (
        
        <nav className="navbar">
          <div className="logo">Saliya Gems</div>

            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/Collection">Collection</Link>
                </li>
                <li>
                    <Link to="/shipping">Shipping</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
export default navbar;
