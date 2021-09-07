import homeSteakPic from './homeSteakPic.jpg';

const homeContainer = function(){
    const mainContainer = document.querySelector("#content");
    const homeCard = document.createElement("div");
    homeCard.classList.add("home-content");
    const homeGreetingMessage = document.createElement("p");
    homeGreetingMessage.textContent = "Grilling Steaks since 1985, come for a bite and have some of the best steak in town!";
    const homeSteakImage = new Image();
    homeSteakImage.src = homeSteakPic;
    const checkOutMenuText = document.createElement("p");
    checkOutMenuText.setAttribute("id", "order-now");
    checkOutMenuText.textContent = "CHECK OUT OUR MENU!"
    homeCard.appendChild(homeGreetingMessage);
    homeCard.appendChild(homeSteakImage);
    homeCard.appendChild(checkOutMenuText);

    function hideHome(){
        homeCard.style.cssText = "visibility: hidden";
    }
    function showHome(){
        homeCard.style.cssText = "visibility: visible";
    }
    mainContainer.appendChild(homeCard);
    return {showHome,hideHome};
}

export {homeContainer};