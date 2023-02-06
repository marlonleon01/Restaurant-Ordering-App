import { menuArray } from "./data.js";

const allContent = document.getElementById("all-content")

const renderAllContent = () => {
    for (let menu of menuArray) {
        allContent.innerHTML += `<div class="menu-items">
                                    <img src="images/${menu.images}" class="menu-img">
                                    <div class="item-contents">
                                        <h2 class="menu-item-title">${menu.name}</h2>
                                        <p class="item-description">${menu.ingredients}</p>
                                        <h3 class="item-price">$${menu.price}</h3>
                                    </div>
                                        <div class="icon">
                                            <i class="fa-regular fa-plus"></i>
                                        </div>            
                                </div>`   
    }
}

renderAllContent()

const renderOrder = () => {
    allContent.innerHTML += `
                            <div class="your-order">
                            <h1 class="order-title">Your Order</h1>
                            <div class="order-items">
                                <h3 class="order-item">Pizza</h3>
                                <h4 class="order-item-price">$14</h4>
                                <h3 class="order-item">Beer</h3>
                                <h4 class="order-item-price">$12</h4>
                            </div>
                            <div class="order-final-price">
                                <h3 class="price-title">Total Price:</h3>
                                <h4 class="price-number">$26</h4>
                            </div>
                            </div>
                            `
}

renderOrder()