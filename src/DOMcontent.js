import createMenu from "./menu";


export default function renderPage() {
    document.addEventListener("DOMContentLoaded", () => {
        //Placing the main div into a variable
        const mainDiv = document.querySelector("#content");
        let menuButton, aboutButton, locationButton, contentDiv;
    
        function createHeader() {
            const header = document.createElement("header");
            header.setAttribute("id", "header");
            const placeName = document.createElement("h1");
            placeName.setAttribute("id", "placeName");
            placeName.textContent = "Mama Pizza!";
            header.appendChild(placeName);
            mainDiv.appendChild(header);

            return header;
        };

        function createNav() {
            const navElement = document.createElement("nav");
            menuButton = document.createElement("button");
            aboutButton = document.createElement("button");
            locationButton = document.createElement("button");
            
            menuButton.textContent = "Menu";
            menuButton.setAttribute("id", "menuBtn");
            menuButton.classList.add("nav-button");
            navElement.appendChild(menuButton);
            
            aboutButton.textContent = "About Us";
            aboutButton.setAttribute("id", "aboutBtn");
            aboutButton.classList.add("nav-button");
            navElement.appendChild(aboutButton);
            
            locationButton.textContent = "Location";
            locationButton.setAttribute("id", "locationBtn");
            locationButton.classList.add("nav-button");
            navElement.appendChild(locationButton);
            
            header.appendChild(navElement);
            

            return { menuButton, aboutButton, locationButton };
        };

        function createMain() {
            contentDiv = document.createElement("div");
            contentDiv.setAttribute("id", "content-Div");
            mainDiv.appendChild(contentDiv);
            createMenu();
            return contentDiv;
        };

        
        createHeader();
        createNav();
        createMain();
        
        menuButton.addEventListener("click", () => {
            contentDiv.innerHTML = '';
            createMenu();
        });


        
    });
    
    
};