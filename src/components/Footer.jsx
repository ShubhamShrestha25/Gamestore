import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">      
            <div className="row">
                <div className="col1">
                    <h4><span>Legal :</span></h4>
                    <ul>
                    <Link  className="disableLink" to="/Terms & Conditions"> <li className="list"> Terms & Conditions  </li> </Link>
                    <Link  className="disableLink" to="/Privacy Policy">   <li className="list">Privacy Policy</li> </Link>
                    <Link  className="disableLink" to="/Store Refund Policy">  <li className="list">Store Refund Policy</li> </Link>
                    <Link  className="disableLink" to="/Support us">   <li className="list">Support us</li> </Link>
                    </ul>
                </div>
                <div className="col2">
                    <h4> <span>Follow Us :</span></h4>
                    <ul>
                    <Link  className="disableLink" to={"//www.facebook.com/"} target="1" >   <li className="list1"><FacebookIcon /></li> </Link>
                    <Link  className="disableLink" to={"//www.instagram.com/"} target="2" >   <li className="list2"><InstagramIcon/></li> </Link>
                    <Link  className="disableLink" to={"//twitter.com/"} target="3" >   <li className="list1"><TwitterIcon /></li>  </Link>
                    <Link  className="disableLink" to={"//www.youtube.com/"} target="4" >   <li className="list2"><YouTubeIcon/></li>   </Link>
                    </ul>   
                </div>          
            </div>
            <hr />
                     <p className="copyright">
                         <span>
                         &copy;{new Date().getFullYear()} Gamer's Lounge | All rights reserved
                         </span>
                     </p>
            </div>       
    )
}

export default Footer
