import { useCart } from '../context/CartContext';
import {CartSliderItem} from './CartSliderItem';
import { ProductData } from '../ProductData';
import {ReactComponent as Cross} from '../assets/icons/cross.svg';
import {ReactComponent as EmptyCart} from '../assets/illustrations/empty-cart-sm.svg';

const CartEmptyState = () => {
	return (
		<div className='Cart-slider-empty-state'>
			<EmptyCart></EmptyCart>
			<div className='pt-2'>Your cart is empty. Add some items!</div>
		</div>
	);
}

const CartPreview = () => {
	const { cartItems, isCartOpen, toggleCartState } = useCart();

	let cartItemsList = [];
	Object.keys(cartItems).forEach((item_id) => {
		let item_data = ProductData[item_id];
		item_data.id = item_id;
		cartItemsList.push(
			<CartSliderItem item_data={item_data} cart_qty={cartItems[item_id]} key={item_id}></CartSliderItem>
		)
	});
	let isCartEmpty = !cartItemsList.length;

	let totalAmount = Object.keys(cartItems).reduce((result, key) => {
		return result + (parseInt(cartItems[key]) * parseInt(ProductData[key].price))
	}, 0).toLocaleString(
		'en-US', {maximumFractionDigits:2}
	);

	return (
		<div className='Cart-preview-container' open={isCartOpen}>
			<span className='Cart-overlay' onClick={ () => toggleCartState(isCartOpen => !isCartOpen)}></span>

			<div className='Cart-preview'>
				<header className='Cart-header'>
					<div className='Cart-title'>
						CART ITEMS
					</div>
					<div className='Cart-close'
						role={'button'}
						onClick={ () => toggleCartState(isCartOpen => !isCartOpen)}
					>
						<Cross></Cross>
					</div>
				</header>

				<main className='Cart-items-container'>
					{ isCartEmpty ? <CartEmptyState></CartEmptyState> : cartItemsList }
				</main>

				<section className='Checkout-CTA'>
					<button className='Checkout-btn'>
						Checkout ({"₹ " + totalAmount})
					</button>
				</section>

			</div>
		</div>
	);
}

export default CartPreview;