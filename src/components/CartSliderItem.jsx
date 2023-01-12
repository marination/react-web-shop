import Counter from './Counter';
import { useCart } from '../context/CartContext';

export const CartSliderItem = (props) => {
	const { removeCartItem } = useCart();
	let item_data = props.item_data;
	let item_price = (parseInt(item_data.price) * parseInt(props.cart_qty))
	item_price = item_price.toLocaleString('en-US', {maximumFractionDigits:2});

	return (
		<div className='Cart-item'>
			<div className='Cart-image'>
				<img className='Cart-image-actual' src={item_data.image} alt={item_data.name}></img>
			</div>

			<div className='Cart-item-name'>
				<h3 className='f-normal pb-5'>{item_data.brand}</h3>
				<h4 className='text-muted f-medium' style={{"textTransform": "capitalize"}}>
					{item_data.name}
				</h4>
				<Counter item_id={item_data.id}></Counter>
			</div>

			<div className='Cart-price-container'>
				<b>{"₹ " + item_price}</b>
				<div className='text-muted pt-p5'
					role={'button'}
					onClick={() => removeCartItem(item_data.id)}
				>
					<u>Remove</u>
				</div>
			</div>
		</div>
	);
}