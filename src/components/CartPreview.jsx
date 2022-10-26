import { useCart } from '../context/CartContext';
import Counter from './Counter';
import { ProductData } from '../ProductData';

const CartItemRow = (props) => {
    let item_data = props.item_data;
    let item_price = (parseInt(item_data.price) * parseInt(props.cart_qty))
    item_price = item_price.toLocaleString('en-US', {maximumFractionDigits:2});

    return (
        <div className='Cart-item'>
            <div className='Cart-item-name'>
                <h3 className='f-normal pb-5'>{item_data.brand}</h3>
                <h4 className='text-muted f-medium' style={{"textTransform": "capitalize"}}>
                    {item_data.name}
                </h4>
            </div>
            <Counter item_id={item_data.id}></Counter>
            <div style={{"padding": "0 1rem"}}><b>{"₹ " + item_price}</b></div>
        </div>
    );
}

const CartPreview = () => {
    const { cartItems, cartQty, isCartOpen, toggleCartState } = useCart();
    let cartHeader = cartQty > 1 ? cartQty + " Items" : cartQty + " Item"
    

    let cartItemsList = [];
    Object.keys(cartItems).forEach((item_id) => {
        let item_data = ProductData[item_id];
        item_data.id = item_id;
        cartItemsList.push(
            <CartItemRow item_data={item_data} cart_qty={cartItems[item_id]} key={item_id}></CartItemRow>
        )
    })

    let totalAmount = Object.keys(cartItems).reduce((result, key) => {
        return result + (parseInt(cartItems[key]) * parseInt(ProductData[key].price))
    }, 0).toLocaleString('en-US', {maximumFractionDigits:2});


    return (
        <div className='Cart-preview-container' open={isCartOpen}>
            <span className='Cart-overlay' onClick={ () => toggleCartState(isCartOpen => !isCartOpen)}></span>
            <div className='Cart-preview'>
                <header className='Cart-header'>
                    <div className='Cart-title' style={{'width':'30%'}}>
                        <svg className='icon' focusable='false' width='20' height='18' viewBox='0 0 20 18'>
                            <path d='M3 1h14l1 16H2L3 1z' fill='none' stroke='#7275d2' strokeWidth='2'></path>
                            <path d='M7 4v0a3 3 0 003 3v0a3 3 0 003-3v0' fill='none' stroke='#7275d2' strokeWidth='2'></path>
                        </svg>
                        <div>{cartQty > 0 ? cartHeader : "Cart"}</div>
                    </div>
                    <div 
                        style={{'width':'50%', 'display': 'flex', 'justifyContent': 'right'}} 
                        onClick={ () => toggleCartState(isCartOpen => !isCartOpen)}
                    >
                        <svg className='icon' focusable='false' width='14' height='14' viewBox='0 0 14 14'>
                            <path d='M13 13L1 1M13 1L1 13' fill='none' stroke='#7275d2' strokeWidth='2'></path>
                        </svg>
                    </div> 
                </header>

                <main className='Cart-items-container'>
                    {cartItemsList}
                </main>

                <section className='Checkout-CTA'>
                    <button className='Checkout-btn'>
                        Checkout | {"₹" + totalAmount}
                    </button>
                    <p className='text-muted f-small' style={{'textTransform': 'capitalize'}}>
                        No account? <a href='#'>Sign up now.</a>
                    </p>
                </section>
                
            </div>
        </div>
    );
}

export default CartPreview;