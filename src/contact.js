import googleMapPic from './googleMap.png';

const contactContainer = function(){
    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-content");
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us!";
    contactCard.appendChild(contactTitle);
    const phoneNumber = document.createElement("h3");
    phoneNumber.textContent = "Phone Number: 593-392-1928";
    contactCard.appendChild(phoneNumber)

    function addHoursText(){
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hours");
        const hoursTitle = document.createElement("h3");
        hoursTitle.textContent = "Hours:";
        const weekDayHours = document.createElement("h4");
        weekDayHours.textContent = "Monday-Friday: 6am-9pm";
        const weekEndHours = document.createElement("h4");
        weekEndHours.textContent = "Weekends: 9am-11pm";
        hoursDiv.appendChild(hoursTitle);
        hoursDiv.appendChild(weekDayHours);
        hoursDiv.appendChild(weekEndHours);
        contactCard.appendChild(hoursDiv);
    }
   function addLocationText(){
        const locationDiv = document.createElement("div");
        locationDiv.classList.add("location");
        const locationHeader = document.createElement("h3");
        locationHeader.textContent = "Location:";
        const address = document.createElement("h4");
        address.textContent = "3322 La Cienega Place In Los Angeles";
        const locationImage = new Image();
        locationImage.src = googleMapPic;
        locationDiv.appendChild(locationHeader);
        locationDiv.appendChild(address);
        locationDiv.appendChild(locationImage);
        contactCard.appendChild(locationDiv);
   }
   function hideContact(){
       contactCard.style.cssText = "visibility: hidden";
   }
   function showContact(){
       contactCard.style.cssText = "visibility: visible"
   }
   addHoursText();
   addLocationText();
   return {hideContact,showContact};

}
export {contactContainer};