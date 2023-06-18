import './assets/styles/App.css';
import './assets/styles/Products.css';

import { ProductData } from './ProductData';
import { useParams } from "react-router-dom";
import { ImageCarousel } from './components/ImageCarousel';
import { ReactComponent as StarIcon } from "./assets/icons/star.svg";

export const Product = () => {
	const { id } = useParams();
	const item_data = ProductData[id];

	return (
		<div className='product-area' 
			style={{
				"marginTop": "70px", 
				"padding": "var(--container-gutter-sm)",
			}}>
			<div className='breadcrumbs f-medium'>
				Home / Accessories / Watches / Smart Watches / Noise
			</div>

			<div className='product-info-container'>
				<div className='w-50'>
					<ImageCarousel images={item_data.images}></ImageCarousel>
				</div>

				<div className='w-50 product-data-container' style={{paddingLeft: "20px"}}>
					<p className='m-0 product-title'>{item_data.name}</p>
					<p className='m-0 product-brand f-large'>{item_data.brand}</p>
					
					<div className='f-normal product-ratings-shortcut'>
						<span>{item_data.ratings}</span>
						<span className='svg-container product-ratings-shortcut-svg'>
							<StarIcon></StarIcon>
						</span>
						<span style={{marginRight: ".5rem",color: "var(--muted-gray)"}}>
							| 
						</span>
						<span className='text-muted'>{item_data.reviews} Reviews</span>
					</div>

					<div className='product-price-section'>
						<span className='product-price'>
							{"Rs."}&nbsp;{item_data.price}
						</span>
						<span className='product-old-price f-xl text-muted'>
							<s>{"Rs."}&nbsp;{item_data.old_price}</s>
						</span>

						<span className='f-xl purple-text'>
							<strong>
								{"Rs."}&nbsp;{item_data.old_price - item_data.price} &nbsp;OFF
							</strong>
						</span>
					</div>

					<button className='product-add-to-cart'>
						
						<span className='f-large'>Add to Cart</span>
					</button>
				</div>
			</div>
		</div>
	)
}