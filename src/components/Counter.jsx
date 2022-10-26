import { useCart } from '../context/CartContext';

const Counter = (props) => {
    const { cartItems, setCartQty, increaseCartQty, decreaseCartQty } = useCart();
    let cartCounterQty = cartItems[props.item_id];

    return (
        <div className="Counter-container">
            <div className="Counter">
                <button onClick={() => increaseCartQty(props.item_id)}>+</button>
                <input 
                    type='number' min="0" max="99999" 
                    value={cartCounterQty}
                    onChange={(e) => setCartQty(props.item_id, e.target.value)}>    
                </input>
                <button onClick={() => decreaseCartQty(props.item_id)}>-</button>
            </div>
        </div>
       
    );
}

export default Counter;