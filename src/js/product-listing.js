import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./productData.mjs";
import ProductListing from "./productList.mjs";

const productData = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductListing("Tents", productData, element);
const listing = new ProductList(category, dataSource, element);

productList.init();
