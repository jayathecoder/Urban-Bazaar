import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ category, banner }) => {
    const { all_product } = useContext(ShopContext);

    // Filter products by category
    const filteredProducts = all_product?.filter((item) => item.category === category) || [];

    return (
        <div className="shop-category">
            {/* Category Banner */}
            <img className="shopcategory-banner" src={banner || "default-banner.jpg"} alt="Category Banner" />

            {/* Sorting Section */}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {filteredProducts.length > 0 ? "1-12" : "0"} </span> out of {filteredProducts.length} products
                </p>
                <button className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="Sort Dropdown" />
                </button>
            </div>

            {/* Product Grid */}
            <div className="shopcategory-products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>

            {/* Load More Button */}
            {filteredProducts.length > 12 && <button className="shopcategory-loadmore">Explore More</button>}
        </div>
    );
};

export default ShopCategory;
