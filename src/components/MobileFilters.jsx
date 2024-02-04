import { ReactComponent as FilterIcon } from "../assets/icons/sliders.svg";
import { BrandFilters, CategoryFilters } from "./Filters";

function toggleFilterDrawer () {
	let drawer = document.getElementById("Filters-drawer-mobile");
	let isDrawerOpen = Boolean(drawer.getAttribute("open"));
	
	isDrawerOpen ? drawer.removeAttribute("open") : drawer.setAttribute("open", true);
	
}

export const MobileFiltersToggler = () => {
	return (
		<div className="Mobile-filter-toggler-container">
			<div className="Mobile-filter-toggler" onClick={toggleFilterDrawer}>
				<span className='icon text-muted' style={{"display": "flex"}}>
					<FilterIcon></FilterIcon>
				</span>
				Filters
			</div>
			{/* <div className="Mobile-filter-toggler">Sort by</div> */}
		</div>
	);
}

export const MobileFiltersDrawer = () => {
	return (
		<div id='Filters-drawer-mobile'>
			 <header className="Shop-area-header">
				<span className="Filters-header" style={{"flexGrow": 1}}>Filters</span>
				<span  className="f-medium Clear-filters" onClick={toggleFilterDrawer}>
					<u>Close</u>
				</span>
			</header>

			<div className="Filter-body" style={{"flexGrow": ".85"}}>
				<BrandFilters forMobile={true}></BrandFilters>
				<CategoryFilters forMobile={true}></CategoryFilters>
			</div>

			<div className="Filters-CTA">
				<button className="Apply-filters-btn" onClick={toggleFilterDrawer}>
					Apply Filters
				</button>
			</div>
		</div>
	);
}