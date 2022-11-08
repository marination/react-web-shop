import { useCart } from "../context/CartContext";

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
