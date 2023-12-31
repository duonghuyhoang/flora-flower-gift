import "./DetailProduct.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Pickup from "../../components/Pickup";
import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useNavigate, useParams } from "react-router-dom";
import ProductCardsLess from "../../components/ProductCardsLess";
import { products } from "../../products";
import Sale from "../../components/Sale";
import AddToCart from "../../components/ButtonAddToCart";

function DetailProduct() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { name } = useParams();
  const dispatch = useDispatch();
  const product = products.find((product) => product.name === name);
  const otherProducts = products
    .filter((product) => product.name !== name)
    .slice(0, 5);
  const [selectedImage, setSelectedImage] = useState(product.imageUrl1);
  if (!product) {
    return <div>Product not found</div>;
  }
  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      // onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity - 1);
      // onQuantityChange(newQuantity);
      return newQuantity;
    });
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const newQuantity = Math.max(1, parseInt(value));
    setQuantity(newQuantity);
    // onQuantityChange(newQuantity);
  };
  const handleToCart = () => {
    navigate("/cart");
  };
  return (
    <DefaultLayout
      content={
        <div className='wrapper-detailproduct'>
          <div className='datail-product'>
            <div className='wrapper-product-image-datail'>
              <div data-bs-toggle='modal' data-bs-target='#exampleModal'>
                <img
                  src={selectedImage}
                  alt={product.name}
                  className='product-image-datail'
                />
              </div>
              <div
                class='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div class='modal-dialog'>
                  <div class='modal-content '>
                    <button
                      type='button'
                      class='btn-close  btn-close-imgae-zoom'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>

                    <img
                      src={product.imageUrl1}
                      className={`sub-product-image-datail-zoom `}
                      alt=''
                    />
                    <img
                      src={product.imageUrl2}
                      className={`sub-product-image-datail-zoom `}
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div className='wrapper-sub-product-image-datail '>
                <img
                  src={product.imageUrl1}
                  className={`sub-product-image-datail ${
                    selectedImage === product.imageUrl1 ? "selected" : ""
                  }`}
                  alt=''
                  onClick={() => handleImageClick(product.imageUrl1)}
                />
                <img
                  src={product.imageUrl2}
                  className={`sub-product-image-datail ${
                    selectedImage === product.imageUrl2 ? "selected" : ""
                  }`}
                  alt=''
                  onClick={() => handleImageClick(product.imageUrl2)}
                />
              </div>
            </div>

            <div className='datail-product-content'>
              <h1 className='name-datail-product-content'>{product.name}</h1>
              <p className='description-datail-product-content'>
                {product.detail}
              </p>
              <div className='price-product-card-datail'>
                <div className='price-main-product-card-detail'>
                  {product.priceMain}
                </div>
                <div className='price-sale-product-card-detail'>
                  {product.priceSale}
                </div>
                <div>
                  <Sale />
                </div>
              </div>{" "}
              <div className='buy-product-card-datail'>
                <div className='quantily-product-card-detail'>Quantity</div>

                <div className='quantily-change-product-card-detail'>
                  <button className='btn-decrement' onClick={handleDecrement}>
                    -
                  </button>
                  <input
                    className='input-quantily'
                    type='number'
                    value={quantity}
                    onChange={handleQuantityChange}
                    min='1'
                  />
                  <button className='btn-increment' onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <div className='share'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-arrow-bar-up share-icon'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z'
                    />
                  </svg>
                  <span className='share-title'>Share</span>
                </div>
                <div className='pickup-datail-product'>
                  <Pickup />
                </div>
                <div
                  className='add-to-cart-product-detail'
                  onClick={() => dispatch(addToCart({ product, quantity }))}
                >
                  <AddToCart />
                </div>

                <div className='get-everyone-involved-product-card-datail'>
                  Get everyone involved
                </div>
                <div className='wrapper-pickup-product-card-datail'>
                  <div className='pickup-product-card-datail'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      class='bi bi-check-lg pickup-icon-product-card-datail'
                      viewBox='0 0 16 16'
                    >
                      <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
                    </svg>
                    <span className='pickup-title-product-card-datail'>
                      Pickup available at 11 Thai Ha
                    </span>
                  </div>
                  <div
                    className='pickup-title-product-card-datail'
                    style={{ marginLeft: "20px", fontSize: "13.5px" }}
                  >
                    Usually ready in 5+ days
                  </div>
                </div>
                <div
                  className='view-cart-product-card-datail'
                  onClick={() => handleToCart()}
                >
                  View store information
                </div>
              </div>
            </div>
          </div>
          <div className='recommend-product-card-datail'>You may also like</div>
          <div className='wrapper-product-card-less'>
            {otherProducts.slice(1, 5).map((product) => (
              <div key={product.id}>
                <ProductCardsLess product={product} />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default DetailProduct;
