import ProductCard from "./ProductCard";
import { ProductData } from "../ProductData";

export default function ProductGrid (props) {
    let itemList = [];
    Object.keys(ProductData).forEach((item_id) => {
        let item_data = ProductData[item_id];
        itemList.push(
            <ProductCard item={item_data} id={item_id} key={item_id}></ProductCard>
        );
    });

    return (
        <div className="Product-section">
            <div className="Shop-area-header Sort-by-header">
                <div className="Sort-by f-medium">
                    <label className="text-muted" htmlFor="Sort-methods">Sort by &nbsp;</label>
                    <select id="Sort-methods">
                        <option value="volvo">Featured</option>
                        <option value="saab">Price, low to high</option>
                        <option value="fiat">Price, high to low</option>
                        <option value="audi">Best selling</option>
                    </select>
                </div>
            </div>
            <div id="Product-grid">
                {itemList}
            </div>
        </div>
            

    );
}