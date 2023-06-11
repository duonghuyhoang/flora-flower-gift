import { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./Catalog.scss";
import ProductCards from "../../components/ProductCards";
import { products } from "../../products";
function Catalog() {
  const [sortOption, setSortOption] = useState("name-asc");

  let sortedProducts = [...products];
  switch (sortOption) {
    case "name-asc":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      sortedProducts.sort(
        (a, b) => parseFloat(a.priceMain) - parseFloat(b.priceMain)
      );
      break;
    case "price-desc":
      sortedProducts.sort(
        (a, b) => parseFloat(b.priceMain) - parseFloat(a.priceMain)
      );
      break;
    default:
      break;
  }
  return (
    <DefaultLayout
      content={
        <div className='wapper-catalog'>
          <div className='wrapper-sort-catalog'>
            <div className='sort-catalog'>
              <label className='lable-sort' htmlFor='sort-select'>
                Sort by:
              </label>
              <select
                className='select-sort-catalog'
                id='sort-select'
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value='name-asc'>Alphabetically, A-Z</option>
                <option value='name-desc'>Alphabetically, Z-A</option>
                <option value='price-asc'>Price, low to high</option>
                <option value='price-desc'>Price, high to low</option>
              </select>
            </div>
            <div className='product-count'>{products.length} products</div>{" "}
          </div>

          <div className='product-card-catalog'>
            {sortedProducts.map((product) => (
              <div key={product.id}>
                <ProductCards product={product} />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}

export default Catalog;
