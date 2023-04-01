import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartState = createContext();

export function useCart() {
	return useContext(CartState);
}

function CartProvider (props) {
	const [cartItems, setCartItems] = useLocalStorage("cart_items", {});
	const [isCartOpen, toggleCartState] = useState(false);

	const cartQty = Object.keys(cartItems).length;

	function getItemQty(id) {
		return cartItems[id] ? cartItems[id] : 0;
	}
	
	function increaseCartQty(id) {
		setCartItems(prevcartItems => {
			let cartItems = Object.assign({}, prevcartItems);
			cartItems[id] = cartItems[id] ? (parseInt(cartItems[id]) + 1) : 1;

			return {...cartItems};
		});
	}

	function decreaseCartQty(id) {
		setCartItems(prevcartItems => {
			let cartItems = Object.assign({}, prevcartItems);
			if (parseInt(cartItems[id]) === 1) {
				// Before qty - 1, if qty is 1 it will become 0
				delete cartItems[id];
			} else {
				cartItems[id] = parseInt(cartItems[id]) - 1;
			}
			
			return {...cartItems};
		});
	}

	function setCartQty(id, qty) {
		setCartItems(prevcartItems => {
			let cartItems = Object.assign({}, prevcartItems);
			cartItems[id] = qty;
			return {...cartItems};
		});
	}

	function removeCartItem(id) {
		setCartItems(prevcartItems => {
			let cartItems = Object.assign({}, prevcartItems);
			delete cartItems[id];
			return {...cartItems};
		});
	}

	return (
		<CartState.Provider value={{ 
			getItemQty, 
			increaseCartQty,
			decreaseCartQty,
			setCartQty,
			removeCartItem,
			cartItems,
			cartQty,
			isCartOpen,
			toggleCartState
		}}>
			{props.children}
		</CartState.Provider>
	)
}

export default CartProvider;