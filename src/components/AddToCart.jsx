import { useCart } from "../context/CartContext";

const AddToCartBtn = (props) => {
    const { increaseCartQty } = useCart();

    return (
        <button className={props.class} onClick={ () => increaseCartQty(props.item_id)}>
            Add to Cart
        </button>
    )
}

export default AddToCartBtn;