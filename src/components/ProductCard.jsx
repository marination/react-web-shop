
import { AddToCartBtn, AddedtoCartBtn, CartBtnMobile } from "./AddToCart";

const CartBtnDesktop = (props) => {
	return (
		<div className="overlay">
			<AddToCartBtn class="Micro-add-to-cart" item_id={props.item_id}></AddToCartBtn>
			<AddedtoCartBtn item_id={props.item_id}></AddedtoCartBtn>
		</div>
	);
}

const ProductCard = (props) => {
  let data = props.item;

  function isMobile() {
	return ( ( window.innerWidth <= 800 ) );
  }

  return (
	<div className='Item-container'>
		<div className='Item-image'>
			<img className='Item-image-actual' src={data.image} alt={data.name}></img>

			{data.new && <div className="New-label f-small">New Trend</div>}

			{/* Ratings */}
			<div className='Item-ratings f-small'>
				<b>{data.ratings}</b> ⭐️  |  <b>{data.reviews}</b>
			</div>

			{/* Cart Button */}
			{
				!isMobile() ? 
					<CartBtnDesktop item_id={props.id}></CartBtnDesktop> 
				: 
					<CartBtnMobile item_id={props.id}></CartBtnMobile>
			}
		</div>

		<div className='Item-meta-details'>
			<h3 className='f-normal pb-5'>
				<a href={"/product/" + props.id} class="card-link">
					{data.brand}
				</a>
			</h3>
			<h4 className='text-muted f-medium'>{data.name}</h4>

			<div className='Item-price-details'>
				<p className='m-0'>
					<span className='f-medium purple-text'><b> {"₹"}&nbsp;{data.price} </b></span>
					<span className='text-muted f-small'><s>{"₹"}&nbsp;{data.old_price}</s></span>
				</p>
			</div>
		</div> 
	</div>
  );
}

export default ProductCard;
