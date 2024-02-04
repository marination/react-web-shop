
import '../assets/styles/Filters.css';
import { ProductData } from '../ProductData';
import FilterSection from './FilterBuilder';


export const BrandFilters = ({forMobile=false}) => {
	const Brands = new Set()
	Object.keys(ProductData).forEach((key) => {
		Brands.add(ProductData[key].brand);
	})

	return (
		<FilterSection 
			title={'Brands'} 
			filterValues={Brands} 
			type={'brand'}
			forMobile={forMobile}
		>
		</FilterSection>
	);
}

export const CategoryFilters = ({forMobile=false}) => {
	const Categories = new Set()
	Object.keys(ProductData).forEach((key) => {
		Categories.add(ProductData[key].category);
	})

	return (
		<FilterSection 
			title={'Categories'} 
			filterValues={Categories} 
			type={'category'}
			forMobile={forMobile}
		>
		</FilterSection>
	);
	
}

export default function Filters () {
	return (
		<div id='Filters-container'>
			<div className="Shop-area-header Filters-header">
				<span>Filters</span>
			</div>

			<BrandFilters></BrandFilters>
			<CategoryFilters></CategoryFilters>
		</div>
		
	);
}