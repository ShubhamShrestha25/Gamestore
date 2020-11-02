import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <h1>Gamer's Lounge</h1>
                <p>News</p>
                <p>About Us</p>   
            </div>

            <div className="right">
                <div className="search-bar">
                    <input className="input" type="text" placeholder="Search Games " />
                    <SearchIcon className="search-icon"/>
                </div>                             
                    <button className="login">LOGIN</button>               
            </div>
        </div>             
    )
}

export default Header
