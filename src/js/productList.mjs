import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/?product=${product.Id}">
    <img
        src=${product.Image}
        alt=${product.Name}
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">${product.FinalPrice}</p></a
    >
</li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    };

    async init() {
        const list = await this.dataSource.getData();
        const newlist = this.tentFilter(list);
        this.renderList(newlist);
    }

    renderList(list) {
       //const htmlStrings = list.map(productCardTemplate);
       //this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
       renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

    tentFilter(list) {
        const allProductId = new Set(["880RR", "985RF", "985PR", "344YJ"]);
        return list.filter(product => allProductId.has(product.Id));
    }
}