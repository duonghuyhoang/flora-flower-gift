import Home from "../pages/Home";
import Catalog from "./../pages/Catalog/";
import Contact from "../pages/Contact";
import DetailProduct from "../pages/DetailProduct";
import Cart from "../pages/Cart";

const publicRoutes = [
  {
    part: "/",
    component: Home,
  },
  {
    part: "/catalog",
    component: Catalog,
  },
  {
    part: "/contact",
    component: Contact,
  },
  {
    part: "/catalog/:name",
    component: DetailProduct,
  },
  {
    part: "/cart",
    component: Cart,
  },
  {
    part: "/flora-flower-gift",
    component: Home,
  },
];

export default publicRoutes;
