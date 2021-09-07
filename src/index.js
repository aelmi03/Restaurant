import './styles.css';
import {loadNavBarAndTitle} from './navbar.js';
import {homeContainer} from './home.js';
import {menuContentContainer} from './menu.js';
import {contactContainer} from './contact.js'
loadNavBarAndTitle();

const tabNavigationController = (function(){
    const homeTab = document.querySelector(".home");
    const menuTab = document.querySelector(".menu");
    const contactTab = document.querySelector(".contact");
    const homeContent = homeContainer();
    const menuContent = menuContentContainer();
    const contactContent = contactContainer();
    homeTab.addEventListener("click", showHomeContent);
    menuTab.addEventListener("click", showMenuContent );
    contactTab.addEventListener("click", showContactContent);

    function showHomeContent(){
        homeContent.showHome();
        menuContent.hideMenu();
        contactContent.hideContact();
    }
    function showMenuContent(){
        menuContent.showMenu();
        homeContent.hideHome();
        contactContent.hideContact();
    }
    function showContactContent(){
        contactContent.showContact();
        homeContent.hideHome();
        menuContent.hideMenu();
    }
})();