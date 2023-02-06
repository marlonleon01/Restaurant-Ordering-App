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
