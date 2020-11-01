import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
        
        <h1>Gamer's Lounge</h1>
           
            
            <p>News</p>
            <p>About us</p>
            
        
        <div className="search-bar">
            <input type="text" placeholder="Search Games " />
            <SearchIcon />
        </div>
        
        <div className="login">
            <button>LOG IN</button>
        </div>
        </div>             
    )
}

export default Header
