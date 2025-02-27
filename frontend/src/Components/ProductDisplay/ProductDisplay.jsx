import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png"; // Fixed incorrect import
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    // Handle cases where product data is not available
    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="productdisplay">
            {/* Left Side: Product Images */}
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.images?.map((img, index) => (
                        <img key={index} src={img} alt={`Thumbnail ${index + 1}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt={product.name} />
                </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                
                {/* Star Ratings */}
                <div className="productdisplay-right-stars">
                    {[...Array(4)].map((_, i) => (
                        <img key={i} src={star_icon} alt="star" />
                    ))}
                    <img src={star_dull_icon} alt="star dull" />
                    <p>(122)</p>
                </div>

                {/* Price Section */}
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price.toFixed(2)}</div>
                    <div className="productdisplay-right-price-new">${product.new_price.toFixed(2)}</div>
                </div>

                {/* Description */}
                <div className="productdisplay-right-description">
                    A high-quality product, recommended by Adarsh Pandey, the owner of this website.
                </div>

                {/* Size Selection */}
                <div className="productdisplay-right-size">
                    <h2>Select Size</h2>
                    <div className="productdisplay-right-sizes">
                        {["Small", "Medium", "Large", "XL", "XXL"].map((size) => (
                            <div key={size} className="size-option">{size}</div>
                        ))}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button onClick={() => addToCart(product.id)}>ADD TO CART</button>

                {/* Product Category & Tags */}
                <p className="productdisplay-right-category"><span>Category:</span> Women, T-shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
