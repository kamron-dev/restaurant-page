export default function renderPage() {
    document.addEventListener("DOMContentLoaded", () => {
        //Placing the main div into a variable
        const mainDiv = document.querySelector("#content");
    
        function createHeader() {
            const header = document.createElement("header");
            header.setAttribute("id", "header");
            const placeName = document.createElement("h1");
            placeName.setAttribute("id", "placeName");
            placeName.textContent = "Mama Pizza!";
            header.appendChild(placeName);
            mainDiv.appendChild(header);

            return mainDiv;
        };

        function createNav() {
            const navElement = document.createElement("nav");
            const menuButton = document.createElement("button");
            const aboutButton = document.createElement("button");
            const locationButton = document.createElement("button");
            
            menuButton.textContent = "Menu";
            menuButton.setAttribute("id", "menuBtn");
            navElement.appendChild(menuButton);
            
            aboutButton.textContent = "About Us";
            aboutButton.setAttribute("id", "aboutBtn");
            navElement.appendChild(aboutButton);
            
            locationButton.textContent = "Location";
            locationButton.setAttribute("id", "locationBtn");
            navElement.appendChild(locationButton);
            
            header.appendChild(navElement);

            return mainDiv;
        };

        function createMain() {
            const contentDiv = document.createElement("div");
            contentDiv.setAttribute("id", "content-Div");
            mainDiv.appendChild(contentDiv);

            return mainDiv
        }


        createHeader();
        createNav();
        createMain();
    });
    
    
};