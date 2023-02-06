import { menuArray } from "./data.js";

const allContent = document.getElementById("all-content")
const menuItemsContainer = document.getElementById("menu-items-container")
const orderContainer = document.getElementById("order-container")
const paymentModal = document.getElementById("modal-container")
const nameInput = document.getElementById("name-input")

let totalPrice = 0
let order = []

document.addEventListener("click", event => {
    if (event.target.dataset.add) {
        addOrderItem(event.target.dataset.add)
    }
    if (event.target.dataset.remove) {
        removeOrderItem(event.target.dataset.remove)
    }
    if (event.target.id === "complete-order") {
        displayPaymentModal()
    }
    if (event.target.id === "pay-btn") {
        event.preventDefault
        processPayment()
    }

})

const addOrderItem = (itemId) => {
    const targetItemObj = menuArray.filter(item => {
        return item.id == itemId
    })[0]

    if (!order.includes(targetItemObj)) {
        order.push(targetItemObj)
        totalPrice += targetItemObj.price
        renderOrderSection()
        renderOrderItems()
    }
}

const removeOrderItem = (itemId) => {
    const targetItemObj = menuArray.filter(item => {
        return item.id == itemId
    })[0]

    if (order.includes(targetItemObj)) {
        order.pop(targetItemObj)
        totalPrice -= targetItemObj.price
        renderOrderSection()
        renderOrderItems()
    }
}

const getMenuHtml = () => {
    let menuHtml = ""
    
    menuArray.forEach(items => {
        menuHtml += `
                    <div class="menu-items">
                        <img src="images/${items.images}" class="menu-img">
                        <div class="item-contents">
                            <h2 class="menu-item-title">${items.name}</h2>
                            <p class="item-description">${items.ingredients}</p>
                            <h3 class="item-price">$${items.price}</h3>
                        </div>
                            <div class="icon">
                                <i class="fa-regular fa-plus" data-add="${items.id}"></i>
                            </div>            
                    </div>
                    `   
    })
    return menuHtml
}

const renderMenu = () => menuItemsContainer.innerHTML = getMenuHtml()

renderMenu()

const getOrderSectionHtml = () => {
    return `
            <div class="your-order">
            <h1 class="order-title">Your Order</h1>
            <div class="order-items" id="order-items">
                <!-- Insert Order Items Here -->
            </div>
            <div class="order-final-price">
                <h3 class="price-title">Total Price:</h3>
                <h4 class="price-number">$${totalPrice}</h4>
            </div>
            <button class="complete-order" id="complete-order">Complete order</button>
            </div>
            `
}

const renderOrderSection = () => {
    orderContainer.innerHTML = getOrderSectionHtml()
}

const getOrderItemHtml = () => {
    let orderHtml = "" 
    order.forEach(item => {
        orderHtml += `
                        <div class="order-individual-item">
                            <h3 class="order-item">${item.name} 
                                <span class="remove-item" data-remove="${item.id}">remove</span>
                            </h3>
                            <h4 class="order-item-price">$${item.price}</h4>
                        </div>
                        `
    })
    return orderHtml
}

const renderOrderItems = () => {
    document.getElementById("order-items").innerHTML = getOrderItemHtml()
}

const displayPaymentModal = () => {
    paymentModal.style.display = "block"
    allContent.style.backgroundColor = "#8B8B8B"
}

const processPayment = () => {
    paymentModal.style.display ="none"
    allContent.style.backgroundColor = "#FFF"

    const userName = nameInput.value 

    orderContainer.innerHTML = `
                                <div class="complete-order-text">
                                    <p>Thanks, ${userName}! Your order is on its way!</p>
                                </div>
                                `
}