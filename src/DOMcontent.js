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
            navElement.appendChild(menuButton);
            
            aboutButton.textContent = "About Us";
            navElement.appendChild(aboutButton);
            
            locationButton.textContent = "Location";
            navElement.appendChild(locationButton);
            mainDiv.appendChild(navElement);

            return mainDiv;
        }

        // const navElement = document.createElement("nav");
        // for (let i = 0; i < 3; i++) {
        //     const buttons = document.createElement("button");
        //     buttons.classList.add("nav-button");
        //     navElement.appendChild(buttons);
        // };
        // mainDiv.appendChild(navElement);

        createHeader();
        createNav();
    });
    
    
};