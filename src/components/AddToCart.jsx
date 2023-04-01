import { useCart } from "../context/CartContext";
import { ReactComponent as ShoppingCartIcon } from "../assets/icons/shopping-cart.svg";

export const AddToCartBtn = (props) => {
	const { increaseCartQty } = useCart();

	function animateAddtoCart (event) {
		increaseCartQty(props.item_id);
		let added_to_cart_id = "Added-to-cart-" + props.item_id;
		let added_to_cart_btn = document.querySelector("#" + added_to_cart_id);

		// show added to cart
		event.target.setAttribute("hidden", "true");
		added_to_cart_btn.removeAttribute("hidden");
		
		// restore original state
		setTimeout(() => {
			added_to_cart_btn.setAttribute("hidden", "true");
			event.target.removeAttribute("hidden");
		}, 2000)
  
	}

	return (
		<button 
			id={"Add-to-cart-" + props.item_id}
			className={props.class + " Micro-cart-btn"}
			onClick={(event) => animateAddtoCart(event)}
		>
			Add to Cart
		</button>
	)
}

export const AddedtoCartBtn = (props) => {
	return (
		<button id={"Added-to-cart-" + props.item_id} className="Added-to-cart Micro-cart-btn" hidden>
			Added to Cart
		</button>
	)
}

export const CartBtnMobile = (props) => {
	const { increaseCartQty } = useCart();

	function animateMobileAddtoCart () {
		increaseCartQty(props.item_id);

		let add_to_Cart_btn_id = "Mobile-add-to-cart-" + props.item_id;
		let added_to_cart_btn = document.querySelector("#" + add_to_Cart_btn_id);
		let cart_icon = added_to_cart_btn.getElementsByClassName("feather-shopping-cart")[0];
		
		added_to_cart_btn.classList.add("clicked");
		cart_icon.classList.add("clicked");
		
		// restore original state
		setTimeout(() => {
			added_to_cart_btn.classList.remove("clicked");
			cart_icon.classList.remove("clicked");
		}, 1000)
  
	}

	return (
		<button 
			id={"Mobile-add-to-cart-" + props.item_id}
			className="Mobile-micro-cart-btn"
			onClick={animateMobileAddtoCart}
		>
			<ShoppingCartIcon></ShoppingCartIcon>
		</button>
	)
}