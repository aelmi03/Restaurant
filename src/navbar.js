
const loadNavBarAndTitle = function(){
    const mainContainer = document.querySelector("#content");
    const title = document.createElement("h1");
    title.textContent = "Lucky's Grill";
    const mainNavDiv = document.createElement("div");
    mainNavDiv.classList.add("nav-bar");
   
    function initializeNavBar(){
        const homeDiv = document.createElement("div");
        homeDiv.textContent = "Home";
        homeDiv.classList.add("home");
        const menuDiv = document.createElement("div");
        menuDiv.textContent = "Menu";
        menuDiv.classList.add("menu");
        const contactDiv = document.createElement("div");
        contactDiv.textContent = "Contact";
        contactDiv.classList.add("contact");
        mainNavDiv.appendChild(homeDiv);
        mainNavDiv.appendChild(menuDiv);
        mainNavDiv.appendChild(contactDiv);
    }
    initializeNavBar();
    mainContainer.appendChild(title);
    mainContainer.appendChild(mainNavDiv);
}

export {loadNavBarAndTitle};