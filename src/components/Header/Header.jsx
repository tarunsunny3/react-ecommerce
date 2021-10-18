import React from 'react';
import './HeaderStyles.scss';
import { Link , withRouter} from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="header">
                <Link className='logo-container' to="/">
                    <img src="https://img.icons8.com/office/50/000000/shop.png"/>
                </Link>
                <div className="options">
                    <Link className="option" to="/shop">Shop</Link>
                    <Link className="option" to="/shop">Contact</Link>
                    <Link className="option" to="/signin">Sign In</Link>
                </div>
             
               
            </div>
            
        </div>
    )
}

export default withRouter(Header);
