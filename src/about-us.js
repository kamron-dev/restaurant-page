export default function createAboutUs() {
    const contentDiv = document.getElementById("content-Div");
    const aboutUs = document.createElement("p");
    aboutUs.setAttribute("id", "aboutUs");
    aboutUs.innerHTML = `
    Welcome to Mama Pizza – your cozy haven for mouthwatering, handcrafted pizzas in the heart of your town! <br> <br>Founded by Mama Maria, our pizzeria is a tribute to authentic Italian flavors and a commitment to quality.

    At Mama Pizza, we craft our pizzas with love, using fresh daily-made dough, locally sourced toppings, and secret spice-infused sauces. <br> <br> From classic Margherita to adventurous combos, there's a slice for every taste.

    Step into our warm, inviting space, where the aroma of baking pizzas and friendly smiles await. Join us for a quick lunch, family dinner, or casual hangout – at Mama Pizza, each bite is a taste of homemade joy.`
    contentDiv.appendChild(aboutUs);

    return contentDiv;

}