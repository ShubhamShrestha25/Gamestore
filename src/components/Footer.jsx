import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    return (
        <div className="footer">      
            <div className="row">
                <div className="col1">
                    <h4>Legal</h4>
                    <ul>
                        <li className="list">Terms & Conditons</li>
                        <li className="list">Privacy Policy</li>
                        <li className="list">Store Refund Policy</li>
                        <li className="list">Terms of Service</li>
                    </ul>
                </div>
                <div className="col2">
                    <h4>Follow Us</h4>
                    <ul>
                        <li className="list1"><FacebookIcon /></li>
                        <li className="list2"><InstagramIcon/></li>
                        <li className="list1"><TwitterIcon /></li>
                        <li className="list2"><YouTubeIcon/></li>
                    </ul>   
                </div>          
            </div>
            <hr />
                     <p className="copyright">
                         &copy;{new Date().getFullYear()} Gamer's Lounge | All rights reserved
                     </p>
            </div>       
    )
}

export default Footer
