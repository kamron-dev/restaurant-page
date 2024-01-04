export default function createLocation() {
    const contentDiv = document.getElementById("content-Div");
    let addresDiv = document.createElement("div");
    let phone = document.createElement("h2");
    let address = document.createElement("h2");

    phone.innerHTML = "📞 (555) 123-4567";

    address.innerHTML =  `🏠 Mama Pizza
                                123 Pizzeria Lane
                                Pizza Town, PT 98765` 
    
    addresDiv.setAttribute("id", "addressDiv");
    
    addresDiv.appendChild(phone);
    addresDiv.appendChild(address);

    contentDiv.appendChild(addresDiv);
    
    
    return contentDiv;
}