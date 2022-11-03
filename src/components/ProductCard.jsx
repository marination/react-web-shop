
import AddToCartBtn from "./AddToCart";

const ProductCard = (props) => {
  let data = props.item;

  return (
    <div className='Item-container'>
      <div className='Item-image'>
        <img className='Item-image-actual' src={data.image} alt={data.name}></img>
        <div className='Item-ratings f-small'>
          <b>{data.ratings}</b> ⭐️  |  <b>{data.reviews}</b>
        </div>
        <div className="overlay">
          <AddToCartBtn class="Micro-add-to-cart" item_id={props.id}></AddToCartBtn>
        </div>
      </div>

      <div className='Item-meta-details'>
        <h3 className='f-normal pb-5'>{data.brand}</h3>
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