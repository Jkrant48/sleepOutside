import ProductData from "./productData.mjs";
import ProductListing from "./productList.mjs";

const productData = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductListing("Tents", productData, element);

productList.init();
