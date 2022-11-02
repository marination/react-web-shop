import { ReactComponent as FilterIcon } from "../assets/icons/sliders.svg";

const MobileFilters = () => {
    function toggleFilterDrawer () {
        let drawer = document.getElementById("Filters-container");
        let isDrawerOpen = Boolean(drawer.getAttribute("open"));
        
        isDrawerOpen ? drawer.removeAttribute("open") : drawer.setAttribute("open", true);
        
    }
    return (
        <div className="Mobile-filter-container">
            <div className="Mobile-filter" onClick={toggleFilterDrawer}>
                <span className='icon text-muted' style={{"display": "flex"}}>
                    <FilterIcon></FilterIcon>
                </span>
                Filters
            </div>
            {/* <div className="Mobile-filter">Sort by</div> */}
        </div>
    );
}

export default MobileFilters;