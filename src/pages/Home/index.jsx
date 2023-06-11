import DefaultLayout from "../../layouts/DefaultLayout";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

import { Link } from "react-router-dom";
import { useState } from "react";
import Sale from "../../components/Sale";
import ProductCards from "../../components/ProductCards";
import { products } from "../../products";
import AddToCart from "../../components/ButtonAddToCart";

function Home() {
  const [quantity, setQuantity] = useState(1);
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
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const newQuantity = Math.max(1, parseInt(value));
    setQuantity(newQuantity);
    // onQuantityChange(newQuantity);
  };
  const dispatch = useDispatch();

  return (
    <DefaultLayout
      content={
        <div className='wrapper-home'>
          <div className='image-content'></div>
          <div className='wrapper-home-content'>
            <div className=''>
              {products.slice(1, 2).map((product) => (
                <div className='buy-home-page'>
                  <div className='wrapper-product-image-home'>
                    <div data-bs-toggle='modal' data-bs-target='#exampleModal'>
                      <img
                        src={product.imageUrl1}
                        alt={product.name}
                        className='product-image-home'
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
                  </div>

                  <div className='wrapper-product-content-buy-home'>
                    <div className='product-title-buy-home'>
                      FLORA FLOWER & GIFT
                    </div>
                    <div className='product-name-buy-home'>{product.name}</div>
                    <div className='product-price-buy-home'>
                      <div className='product-price-main-buy-home'>
                        {product.priceMain}
                      </div>
                      <div className='product-price-sale-buy-home'>
                        {product.priceSale}
                      </div>
                      <div style={{ position: "relative" }}>
                        <Sale />
                      </div>
                    </div>
                    <div className='quantily-product-card-detail quantily-product-buy-home'>
                      Quantity
                    </div>
                    <div className='quantily-change-product-card-detail quantily-change-buy-home'>
                      <button
                        className='btn-decrement'
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <input
                        className='input-quantily'
                        type='number'
                        value={quantity}
                        onChange={handleQuantityChange}
                        min='1'
                      />
                      <button
                        className='btn-increment'
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                    <div
                      className='add-to-cart-buy-home'
                      onClick={() => dispatch(addToCart({ product, quantity }))}
                    >
                      <AddToCart />
                    </div>
                    <div style={{ position: "relative" }}>
                      <div className='share share-buy-home'>
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
                      <Link to={`/catalog/${product.name}`}>
                        <div className='view-datail-buy-home'>
                          <span>View full details </span>{" "}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            class='bi bi--short icon-arrow-right'
                            viewBox='0 0 16 16'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='video-home'>
              <iframe
                width='1140'
                height='750'
                style={{ borderRadius: "20px" }}
                src='https://www.youtube.com/embed/kCRbZ_D71QM'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
            <div className='recommend-product-card-datail'>
              You may also like
            </div>
            <div className='product-card-wrapper'>
              {products.slice(2, 6).map((product) => (
                <div key={product.id}>
                  <ProductCards product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Home;
