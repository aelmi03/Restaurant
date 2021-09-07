import beefWellington from './beefWellington.jpeg';
import flankSteak from './flankSteak.jpeg';
import newYorkStripSteak from './newYorkStripSteak.jpg';
import RibEyesWithPotatoes from './RibeyeWithPotatoes.jpg'
const menuContentContainer = function(){
    const mainContainer = document.querySelector("#content");
    const menuContentDiv = document.createElement("div");
    menuContentDiv.classList.add("menu-content");
    
    function addMenuItem(name, backgroundPath, price){
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        const menuTitle = document.createElement("p");
        menuTitle.textContent = name;
        const menuPicture = new Image();
        menuPicture.src = backgroundPath;
        const priceOfFood = document.createElement("p");
        priceOfFood.classList.add("price");
        priceOfFood.textContent = `PRICE: ${price}`;
        menuCard.appendChild(menuTitle);
        menuCard.appendChild(menuPicture);
        menuCard.appendChild(priceOfFood);
        menuContentDiv.appendChild(menuCard);
    }

    function hideMenu(){
        menuContentDiv.style.cssText = "visibility: hidden";
    }

    function showMenu(){
        menuContentDiv.style.cssText = "visibility: visible";
    }

    addMenuItem("Beef Wellington", beefWellington, 49.99);
    addMenuItem("Flank Steak", flankSteak, 39.99 );
    addMenuItem("New York Strip Steak", newYorkStripSteak, 79.99);
    addMenuItem("Rib Eye With Potatoes", RibEyesWithPotatoes, 59.99);
    mainContainer.appendChild(menuContentDiv);
    return {hideMenu, showMenu};
}

export {menuContentContainer};