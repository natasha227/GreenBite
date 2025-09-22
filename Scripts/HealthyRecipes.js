const recipes =[
    {
        name: "Avocado Toast",
        category: "Breakfast",
        description: "A quick and healthy avocado toast.",
        image: "/Images/HealthyRecipes/avocado (1).jpg",
        ingredients: ["2 slices of bread","1 avocado","Salt","Pepper","Lemon juice"],
        steps: ["Toast the bread","Mash avocado with salt, pepper, lemon juice","Spread on toast","Serve immediately"],
        nutrition: {"Calories":"250 kcal","Protein":"6g","Fat":"12g","Carbs":"28g"}

    },
    {
        name: "Oatmeal with Fruits",
        category: "Breakfast",
        description: "Healthy oatmeal with fresh fruits.",
        image: "/Images/HealthyRecipes/oatmeal.jpg",
        ingredients: ["1 cup oats","1 cup milk","1/2 cup mixed fruits","Honey"],
        steps: ["Cook oats in milk","Add fruits","Drizzle honey","Serve warm"],
        nutrition: {"Calories":"220 kcal","Protein":"8g","Fat":"5g","Carbs":"38g"}
    },
    {
        name: "Smoothie Bowl",
        category: "Breakfast",
        description: "A refreshing smoothie bowl with toppings.",
        image: "/Images/HealthyRecipes/smoothie.jpg",
        ingredients: ["1 banana","1/2 cup frozen berries","1/2 cup yogurt","Granola","Chia seeds"],
        steps: ["Blend banana, berries, yogurt","Pour into a bowl","Top with granola and chia seeds","Serve chilled"],
        nutrition: {"Calories":"300 kcal","Protein":"9g","Fat":"7g","Carbs":"55g"}
    },
    {
        name: "Vegetable Omelette",
        category: "Breakfast",
        description: "A protein-rich omelette with veggies.",
        image:"/Images/HealthyRecipes/omelette.jpg",
        ingredients: ["2 eggs","Onion","Tomato","Spinach","Salt","Pepper","Olive oil"],
        steps: ["Whisk eggs with salt and pepper","Sauté vegetables in olive oil","Pour eggs and cook until set","Fold and serve"],
        nutrition: {"Calories":"210 kcal","Protein":"14g","Fat":"15g","Carbs":"4g"}
    },
    {
        name: "Grilled Chicken Salad",
        category: "Lunch",
        description: "A protein-packed lunch salad.",
        image: "/Images/HealthyRecipes/chicken.jpg",
        ingredients: ["200g chicken breast","Lettuce","Tomatoes","Cucumber","Olive oil","Salt","Pepper"],
        steps: ["Grill chicken","Chop vegetables","Mix chicken and vegetables","Drizzle olive oil","Serve chilled"],
        nutrition: {"Calories":"350 kcal","Protein":"30g","Fat":"15g","Carbs":"20g"}
    },
    {
        name: "Quinoa Veggie Bowl",
        category: "Lunch",
        description: "A light and nutritious quinoa bowl.",
        image:"/Images/HealthyRecipes/quinoa.jpg",
        ingredients: ["1 cup quinoa","Mixed vegetables","Olive oil","Salt","Pepper"],
        steps: ["Cook quinoa","Steam vegetables","Mix with quinoa","Season with olive oil, salt, pepper","Serve warm"],
        nutrition: {"Calories":"320 kcal","Protein":"10g","Fat":"8g","Carbs":"50g"}

    },
    {
        name: "Chickpea Salad Bowl",
        category: "Lunch",
        description: "A refreshing salad with chickpeas and vegetables.",
        image: "/Images/HealthyRecipes/chickpea.jpg",
        ingredients: ["1 cup chickpeas","Cucumber","Tomatoes","Onion","Olive oil","Lemon juice","Salt","Pepper"],
        steps: ["Chop vegetables","Mix with chickpeas","Drizzle dressing","Serve fresh"],
        nutrition: {"Calories":"330 kcal","Protein":"14g","Fat":"9g","Carbs":"48g"}
    },
    {
        name: "Turkey Sandwich",
        category: "Lunch",
        description: "A lean protein sandwich for energy.",
        image: "/Images/HealthyRecipes/sandwich.jpg",
        ingredients: ["2 slices bread","Turkey slices","Lettuce","Tomato","Mustard"],
        steps: ["Toast bread","Layer turkey, lettuce, tomato","Spread mustard","Assemble sandwich"],
        nutrition: {"Calories":"290 kcal","Protein":"18g","Fat":"8g","Carbs":"36g"}
    },
    {
        name: "Spaghetti Bolognese",
        category: "Dinner",
        description: "Classic spaghetti with meat sauce.",
        image: "/Images/HealthyRecipes/spaghetti.jpg",
        ingredients: ["200g spaghetti","100g beef","Tomato sauce","Onion","Garlic","Olive oil"],
        steps: ["Cook pasta","Sauté onion, garlic, beef","Add sauce","Mix with pasta","Serve hot"],
        nutrition: {"Calories":"450 kcal","Protein":"25g","Fat":"18g","Carbs":"50g"}
    },
    {
        name: "Grilled Salmon with Veggies",
        category: "Dinner",
        description: "Healthy grilled salmon with steamed vegetables.",
        image: "/Images/HealthyRecipes/grilled.jpg",
        ingredients: ["200g salmon","Broccoli","Carrots","Olive oil","Salt","Pepper","Lemon"],
        steps: ["Grill salmon","Steam vegetables","Serve with lemon slices"],
        nutrition: {"Calories":"400 kcal","Protein":"35g","Fat":"20g","Carbs":"15g"}
    },
    {
        name: "Chicken Curry with Rice",
        category: "Dinner",
        description: "Spicy chicken curry served with rice.",
        image: "/Images/HealthyRecipes/chickencurry.jpg",
        ingredients: ["200g chicken","Onion","Garlic","Spices","Tomatoes","Rice"],
        steps: ["Cook rice","Prepare curry with onion, garlic, spices","Add chicken","Simmer until cooked","Serve with rice"],
        nutrition: {"Calories":"480 kcal","Protein":"32g","Fat":"14g","Carbs":"60g"}
    },
    {
        name: "Vegetable Stir-Fry Noodles",
        category: "Dinner",
        description: "Quick stir-fried noodles with vegetables.",
        image: "/Images/HealthyRecipes/vegitable.jpg",
        ingredients: ["200g noodles","Mixed vegetables","Soy sauce","Garlic","Olive oil"],
        steps: ["Cook noodles","Stir-fry vegetables with garlic","Add noodles and soy sauce","Serve hot"],
        nutrition: {"Calories":"420 kcal","Protein":"12g","Fat":"10g","Carbs":"70g"}
    },
    {
        name: "Beef Stew",
        category: "Dinner",
        description: "A slow-cooked beef stew with vegetables.",
        image: "/Images/HealthyRecipes/stew.jpg",
        ingredients: ["200g beef","Potatoes","Carrots","Onions","Beef broth","Spices"],
        steps: ["Brown beef","Add vegetables and broth","Simmer until tender","Serve warm"],
        nutrition: {"Calories":"500 kcal","Protein":"28g","Fat":"20g","Carbs":"45g"}
    },
    {
        name: "Stuffed Zucchini Boats",
        category: "Dinner",
        description: "Zucchini stuffed with rice and cheese.",
        image: "/Images/HealthyRecipes/zucchini.jpg",
        ingredients: ["3 zucchinis","1 cup rice","Tomato sauce","Cheese","Herbs"],
        steps: ["Cut zucchinis lengthwise","Scoop and stuff with rice mix","Top with sauce and cheese","Bake until tender"],
        nutrition: {"Calories":"310 kcal","Protein":"12g","Fat":"8g","Carbs":"50g"}
    },
    {
        name: "Fruit Yogurt Parfait",
        category: "Snacks",
        description: "A refreshing and healthy snack.",
        image: "/Images/HealthyRecipes/fruit.jpg",
        ingredients: ["1 cup yogurt","1/2 cup granola","Mixed fruits","Honey"],
        steps: ["Layer yogurt, fruits, granola","Drizzle honey","Serve chilled"],
        nutrition: {"Calories":"180 kcal","Protein":"8g","Fat":"5g","Carbs":"28g"}
    },
    {
        name: "Nut & Fruit Energy Bites",
        category: "Snacks",
        description: "Quick, no-bake energy bites.",
        image: "/Images/HealthyRecipes/bites.jpg",
        ingredients: ["1 cup oats","1/2 cup peanut butter","1/4 cup honey","Nuts","Dried fruits"],
        steps: ["Mix ingredients","Form balls","Refrigerate","Serve"],
        nutrition: {"Calories":"120 kcal per bite","Protein":"4g","Fat":"6g","Carbs":"15g"}
    },
    {
        name: "Hummus with Veggie Sticks",
        category: "Snacks",
        description: "Classic hummus served with crunchy veggies.",
        image: "/Images/HealthyRecipes/veggie.jpg",
        ingredients: ["1 cup hummus","Carrots","Cucumber","Celery"],
        steps: ["Cut vegetables into sticks","Serve with hummus dip"],
        nutrition: {"Calories":"150 kcal","Protein":"6g","Fat":"7g","Carbs":"18g"}
    },
    {
        name: "Trail Mix",
        category: "Snacks",
        description: "A portable and healthy nut & fruit mix.",
        image: "/Images/HealthyRecipes/trail.jpg",
        ingredients: ["Mixed nuts","Dried fruits","Seeds","Dark chocolate chips"],
        steps: ["Mix all ingredients","Store in container","Snack anytime"],
        nutrition: {"Calories":"200 kcal per 1/4 cup","Protein":"5g","Fat":"12g","Carbs":"18g"}
    },
    {
        name: "Rice Cakes with Peanut Butter",
        category: "Snacks",
        description: "A crunchy, protein-rich snack.",
        image: "/Images/HealthyRecipes/ricecake.jpg",
        ingredients: ["Rice cakes","Peanut butter","Banana slices"],
        steps: ["Spread peanut butter","Top with banana","Serve"],
        nutrition: {"Calories":"190 kcal","Protein":"6g","Fat":"8g","Carbs":"24g"}
    },
    {
        name: "Baked Sweet Potato Fries",
        category: "Snacks",
        description: "Crispy and healthy sweet potato fries.",
        image: "/Images/HealthyRecipes/potato.jpg",
        ingredients: ["2 sweet potatoes","Olive oil","Salt","Paprika"],
        steps: ["Cut sweet potatoes","Toss with oil and spices","Bake until crispy"],
        nutrition: {"Calories":"220 kcal","Protein":"3g","Fat":"7g","Carbs":"38g"}
    }

];

function recipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipeCard");
    
    card.dataset.recipe = JSON.stringify(recipe);

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="cardContent">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}<p>
        </div>
    `;
    return card;
}

const containers = {
    Breakfast: document.getElementById("breakfastContainer"),
    Lunch: document.getElementById("lunchContainer"),
    Dinner: document.getElementById("dinnerContainer"),
    Snacks: document.getElementById("snacksContainer")
};

recipes.forEach(recipe => {
    containers[recipe.category].appendChild(recipeCard(recipe));
});



const modal = document.getElementById("recipeModal");
const closeButton = modal.querySelector(".close");

document.addEventListener("click", e => {
    const card = e.target.closest(".recipeCard");

    if (!card) return;

    const recipe = JSON.parse(card.dataset.recipe);

    document.getElementById("modalTitle").textContent = recipe.name;
    document.getElementById("modalDescription").textContent = recipe.description;

    document.getElementById("ingredients").innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
    document.getElementById("steps").innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
    document.querySelector("#nutrition tbody").innerHTML = Object.entries(recipe.nutrition).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join("");

    modal.style.display = "block";

});

closeButton.onclick = () => modal.style.display = "none";
window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";   
};
const searchInput = document.getElementById("keyword");

searchInput.addEventListener("input", e => {
    const keyword = e.target.value.toLowerCase();

    document.querySelectorAll(".recipeCard").forEach(card => {
        const recipe = JSON.parse(card.dataset.recipe);

        const matches = recipe.name.toLowerCase().includes(keyword)||
        recipe.description.toLowerCase().includes(keyword)||
        recipe.category.toLowerCase().includes(keyword);
        
        card.style.display = matches ? "block" : "none";
    });

});