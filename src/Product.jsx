import './assets/styles/App.css';
import './assets/styles/Products.css';

import { ProductData } from './ProductData';
import { useParams } from "react-router-dom";
import { ImageCarousel } from './components/ImageCarousel';
import { VariantSelector } from './components/VariantSelector';
import {ProductSpecifications} from './components/ProductSpecifications';
import { ReactComponent as StarIcon } from "./assets/icons/star.svg";
import { ReactComponent as FileIcon } from "./assets/icons/file-text.svg";
import { useCart } from './context/CartContext';

export const Product = () => {
	const { id } = useParams();
	const item_data = ProductData[id];
	const { increaseCartQty } = useCart();

	return (
		<div className='product-area' 
			style={{
				"marginTop": "70px", 
				"padding": "var(--container-gutter-sm)",
			}}>

			<div className='product-info-container'>
				<div className='w-50'>
					<div className='product-sticky-container'>
						<div className='breadcrumbs f-medium'>
							Home / Accessories / Watches / Smart Watches / Noise
						</div>
						
						<ImageCarousel images={item_data.images}></ImageCarousel>
					</div>
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

					<button 
						className='product-add-to-cart Micro-add-to-cart' 
						onClick={() => increaseCartQty(id)}
					>
						<span className='f-normal'>Add to Cart</span>
					</button>

					<VariantSelector variant_data={item_data.variant_data}></VariantSelector>

					{
						item_data.description ? 
						<ProductDescription description={item_data.description}>
						</ProductDescription> 
						: null
					}
				</div>
			</div>

			<ProductSpecifications specifications={item_data.specifications}></ProductSpecifications>
		</div>
	)
}

const ProductDescription = ({description}) => {
	return (
		<div className='product-description'>
			<div className='product-description-title'>
				<span className='f-large wght-600'>Product Description</span>
				<span className='svg-container product-description-icon'>
					<FileIcon></FileIcon>
				</span>
			</div>
			
			<div className='product-description-data f-normal'>
				{description}
			</div>
		</div>
	)
}
