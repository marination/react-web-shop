import { Fragment } from 'react';
import { useCart } from '../context/CartContext';
import CartPreview from './CartPreview';
import { ReactComponent as CartIcon } from "../assets/icons/cart.svg";

const CartBtnWithQty = ({qty}) => {
  return (
    <Fragment>
      <span>CART</span>
      <span className='Cart-label'>{ qty }</span>
    </Fragment>  
  );
}

const CartIconNav = () => {
  return (
    <span className='icon text-muted' style={{"display": "flex", "paddingLeft": "5px"}}>
        <CartIcon></CartIcon>
    </span> 
  );
}

const Navbar = () => {
    const { cartQty, isCartOpen, toggleCartState } = useCart();

    function isMobile() {
      return ( ( window.innerWidth <= 800 ) );
    }

    return (
        <div className='Navbar'>
          {/* TODO: move to file */}
          <svg className='Nav-logo' width={'100px'} height={'50px'} viewBox='0 0 100.1 73.7'>
            <path fill='#7275d2' d="M53.3,14.2l1-14.2L27.4,7.5c-1.8,0.5-3.5,1.1-5.1,1.8c-2.2,0.9-4.9,2.2-7.7,4.1 c0,0,0,0,0-0.1c-5.5,3.6-8.4,7.3-9.5,8.9c-0.1,0.2-0.3,0.5-0.4,0.7c0,0,0,0.1-0.1,0.1l0,0C0.3,30.3-1.2,39.2,1.1,48 c4.6,17.6,22.6,28.2,40.2,23.6c1.1-0.3,2.1-0.6,3.2-1c0.6-1.7,0.6-3.7-0.1-5.7c-0.7-2-2.1-3.9-4.2-6.2c-0.4-0.4-0.9-0.9-1.3-1.3 c-1.7-1.6-3.4-3.3-4.6-5.5c-0.7-1.2-1.1-2.7-1.2-4.2c-1.1,0-2.1-0.2-3.2-0.6c-3.8-1.6-5.5-6-3.8-9.8s6-5.5,9.8-3.8 c3.8,1.6,5.5,6,3.8,9.8c-0.8,1.9-2.4,3.3-4.2,4c0,1.2,0.4,2.5,1,3.5c1,1.8,2.5,3.3,4.2,4.9c0.5,0.4,0.9,0.9,1.4,1.3 c1.5,1.6,3.7,4,4.8,7c0.6,1.8,0.8,3.6,0.6,5.3c10.7-5.1,17.7-15.6,18.6-27.2l6.8-4.9L53.3,14.2z"></path>
          </svg>

          <div className='Nav-categories'>
            <div className='Nav-link'>Watches</div>
            <div className='Nav-link'>Laptops</div>
            <div className='Nav-link'>Mobiles</div>
            <div className='Nav-link'>Audio</div>
            <div className='Nav-link'>Keyboards</div>
          </div>
        
          <div className='Search-container'>
            <input placeholder='Search for products ..' className='Search-bar'></input>
          </div>

          <div className='Nav-link'>
            <div className='Nav-cart' role={'button'} onClick={ () => toggleCartState(isCartOpen => !isCartOpen)}>
              { !isMobile() ?
                   <CartBtnWithQty qty={cartQty}></CartBtnWithQty>
                :
                  <CartIconNav></CartIconNav>
              }
             
            </div>
            

            <CartPreview></CartPreview>
          </div>
        </div>
    )
}

export default Navbar;