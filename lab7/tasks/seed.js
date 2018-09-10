const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const recipes = data.recipes;

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();

    console.log("Create first recipe:");
    await recipes.addRecipe("Fried rice", [{name: "Egg", amount: "2 eggs",}, {name: "Rice", amount: "5 scoops"}],  [
        "First, heat a non-stick pan on medium-high until hot",
        "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
        "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
        "Gently pour the egg from the bowl onto the oil",    
        "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
        "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
        "Remove from oil and plate",
        "Repeat for second egg"
    ]);
    let allRecipes = await recipes.getAllRecipes();
    console.log(allRecipes);

    console.log();

    console.log("Create second recipe:");
    await recipes.addRecipe("Shushi", [{name: "Salmon", amount: "2 pounds",}, {name: "Rice", amount: "10 scoops"}, {name: "Seaweed", amount: "5 pieces"}],  [
        "Put salmon in the rice",
        "Put rice into the seaweed"
    ]);
    allRecipes = await recipes.getAllRecipes();
    console.log(allRecipes);

    console.log();

    console.log("Remove second recipe:");
    await recipes.deleteRecipe(allRecipes[1]._id);
    allRecipes = await recipes.getAllRecipes();
    console.log(allRecipes);

    console.log();

    console.log("Modify the remaining:");
    await recipes.updateRecipe(allRecipes[0]._id, {title: "bb", ingredients: ["bb"], steps: ["bb"]});
    allRecipes = await recipes.getAllRecipes();
    console.log(allRecipes);

    console.log();
    await db.serverConfig.close();
    console.log("Finished!");

}  

main();