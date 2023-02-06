import { menuArray } from "./data.js";

const allContent = document.getElementById("all-content")

const getMenuHtml = () => {
    let menuHtml = ""
    
    menuArray.forEach(items => {
        menuHtml += `<div class="menu-items">
                                    <img src="images/${items.images}" class="menu-img">
                                    <div class="item-contents">
                                        <h2 class="menu-item-title">${items.name}</h2>
                                        <p class="item-description">${items.ingredients}</p>
                                        <h3 class="item-price">$${items.price}</h3>
                                    </div>
                                        <div class="icon">
                                            <i class="fa-regular fa-plus"></i>
                                        </div>            
                                </div>`   
    })
    return menuHtml
}

const renderMenu = () => allContent.innerHTML += getMenuHtml()

renderMenu()

const renderOrder = () => {
    allContent.innerHTML += `
                            <div class="your-order">
                            <h1 class="order-title">Your Order</h1>
                            <div class="order-items">
                                <h3 class="order-item">Pizza 
                                    <span class="remove-item" id="remove-item">remove</span>
                                </h3>
                                <h4 class="order-item-price">$14</h4>
                            </div>
                            <div class="order-final-price">
                                <h3 class="price-title">Total Price:</h3>
                                <h4 class="price-number">$26</h4>
                            </div>
                            <button name="complete order button">Complete order</button>
                            </div>
                            `
}
