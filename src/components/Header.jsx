import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <h1  onClick={()=>window.scrollTo(0,0)}><Link className="disableLink" to={"/"} style={{  color: '#c3073f' }}>Gamer's Lounge </Link> </h1>
                <p> <Link to={"/news"} className="disableLink">News</Link> </p>
                <p> <Link to={"/about"} className="disableLink">About Us</Link></p>   
           
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
