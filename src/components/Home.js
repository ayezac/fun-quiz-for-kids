import React from 'react';
import './styles/style.css';
import { Link } from 'react-router-dom';



const Home = () => {

 
    return(
        <div className='quiz-container'>
       <h1>It's Quiz Time!</h1>
       <h3 id="byline">Test your knowledge</h3>
       <p>Choose from the list of categories and begin!</p>
       <ul id="category-container">
       <Link to='./math' className='category-list'><li>Math</li></Link>
       <Link to='./capitals' className='category-list'><li>Capital Cities</li></Link>
       <Link to='./flags' className='category-list'><li>Flags</li></Link>
       </ul>
        </div>
    )
};

export default Home;