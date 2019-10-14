import React from 'react';
import './styles/navbar.css';
import './styles/style.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
return(
    <nav>
        <div id="navbar">
            <Link to='./' id="home-link">Home</Link>
            <div className="categories">
                Categories
                <div className="dropdown-content">
                    <Link to='/math' className='links'><li>Math</li></Link>
                    <Link to='/capitals' className='links'><li>Capital Cities</li></Link>
                    <Link to='/flags' className='links'><li>Flags</li></Link>
                </div>
                </div> 

            
        </div>
    </nav>
)
}

export default Navbar;