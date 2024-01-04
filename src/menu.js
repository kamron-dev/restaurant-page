export  default function createMenu() {
    const contentDiv = document.getElementById("content-Div");
    const menuGrid = document.createElement("div");
    menuGrid.setAttribute("id", "menuGrid");

    menuGrid.appendChild(createOnePizza("New York style", "Tomato sauce, Mozarella, in foldable size pieces"));
    menuGrid.appendChild(createOnePizza("Chicago Style Pizza", "Tomato sauce, Mozarella ,Ground beef, sausage"));
    menuGrid.appendChild(createOnePizza("Sicilian Style Pizza", "Tomatoes, onions, anchovies, and herbs"));
    menuGrid.appendChild(createOnePizza("Neapolitan Style Pizza", "Mozzarella, tomatoes, basil leaves, oregano, and olive oil"));

    contentDiv.appendChild(menuGrid);

    return {contentDiv, menuGrid};

};

function createOnePizza(name, desc) {
    let oneItem = document.createElement("div");
    oneItem.classList.add("menu-item");

    let itemName = document.createElement("h2");
    itemName.textContent = name;

    let itemDesc = document.createElement("p");
    itemDesc.textContent = desc;

    oneItem.appendChild(itemName);
    oneItem.appendChild(itemDesc);

    return oneItem;
}