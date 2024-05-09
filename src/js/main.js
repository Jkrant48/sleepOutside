import ProductData from "./productData.mjs";
import ProductList from "./productList.mjs";

const productData = new ProductData("tents");
const element = document.querySelector(".product-list");
const productList = new ProductList("Tents", productData, element);

productList.init();
