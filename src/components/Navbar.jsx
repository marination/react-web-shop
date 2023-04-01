import { Fragment, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import CartPreview from './CartPreview';
import { ReactComponent as Logo } from '../assets/icons/nav-logo.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';

const CartBtnWithQty = ({qty}) => {
	return (
		<Fragment>
			<span>Cart</span>
			<span className='Cart-label'>{ qty }</span>
		</Fragment>
	);
}

const CartIconNav = ({qty}) => {
	let first_render = useRef(qty);

	useEffect(() => {
		// animate on change in cart qty
		if (first_render.current !== qty) {
			let cart_icon = document.getElementsByClassName("Nav-cart-icon")[0];
			cart_icon.classList.add("cart-animate");

			setTimeout(() => {
				cart_icon.classList.remove("cart-animate");
				first_render.current = qty;
			}, 2000)

		}

	}, [qty])

	return (
		<span className='icon text-muted Nav-cart-icon' style={{"display": "flex", "paddingLeft": "5px"}}>
				<CartIcon></CartIcon>
		</span>
	);
}

const Navbar = () => {
		const { cartQty, toggleCartState } = useCart();

		function isMobile() {
			return ( ( window.innerWidth <= 800 ) );
		}

		return (
				<div className='Navbar'>
					<Logo></Logo>

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
									<CartIconNav qty={cartQty}></CartIconNav>
							}

						</div>


						<CartPreview></CartPreview>
					</div>
				</div>
		)
}

export default Navbar;