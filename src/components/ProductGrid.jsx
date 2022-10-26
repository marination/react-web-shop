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
        <div id='Product-grid'>
            {itemList}
        </div>
    );
}