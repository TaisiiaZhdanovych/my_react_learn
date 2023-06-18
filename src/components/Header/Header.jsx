

import './header.scss';

import { Link } from 'react-router-dom';


function Header(props) {
  const starHeaderColor = props.primary ? "header__star-active" : "header__star";

  return (
    <>
      <div className="header">
        <Link className='header_logo-text' to = "/"> <p>Lovely Bags</p></Link>

        <ul className="navbar">

          <li><Link to="/Favorits"><i className={"fa-solid fa-star " + starHeaderColor}> </i></Link>{props.favCounter}</li>
            <li><Link to="/Cart"><i className="fa-solid fa-cart-shopping"> </i></Link>{props.cartCounter}</li>
              
          <li><h3>Контакти</h3></li>
          <li><h3>Про нас</h3></li>
        </ul>
      </div>  
    </>
  );
}

export default Header;





