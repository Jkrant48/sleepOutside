import ProductData from "./productData.mjs";
import ProductListing from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const productData = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductListing("Tents", productData, element);

productList.init();
