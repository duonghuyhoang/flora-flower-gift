import "./ProductCards.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sale from "../Sale";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function ProductCards({ product }) {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(product.imageUrl1);

  const handleMouseEnter = () => {
    setImageSrc(product.imageUrl2);
  };

  const handleMouseLeave = () => {
    setImageSrc(product.imageUrl1);
  };
  return (
    <div className='card-product'>
      <Link className='link-hover' to={`/catalog/${product.name}`}>
        <div className='sale-icon-product-card'>
          <Sale />
        </div>

        <TransitionGroup component={null}>
          <CSSTransition key={imageSrc} timeout={300} classNames='fade'>
            <img
              src={imageSrc}
              alt='Product Image'
              className='image-product-card'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </CSSTransition>
        </TransitionGroup>

        <div className='name-product-card'>{product.name}</div>
        <div className='price-product-card'>
          <div className='price-main-product-card'>{product.priceMain}</div>
          <div className='price-sale-product-card'>{product.priceSale}</div>
        </div>
      </Link>
      <div
        className='add-to-cart-product-card'
        onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
      >
        Add to cart
      </div>
    </div>
  );
}

export default ProductCards;
