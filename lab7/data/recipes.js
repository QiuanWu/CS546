const mongoCollections = require("../config/mongoCollections.js");
const recipes = mongoCollections.recipes;
const uuid = require("uuid/v4");

/* Retrieves an existing recipe by id */
const getRecipeById = async function getRecipeById(id) {

    try {
        if (!id) {
            throw "You must provide an id to search for";
        }
        if (typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        }
        const recipeCollection = await recipes();
        const recipego = await recipeCollection.findOne({ _id: id });

        if (recipego === null)
            throw "No recipe found with this id"

        return recipego;
    }

    catch (err) {
        console.log(err);
    }

}

/* Retrieve all existing recipes */
const getAllRecipes = async function getAllRecipes() {

    try {
        const recipeCollection = await recipes();
        const allRecipes = await recipeCollection.find({}).toArray();
        
        return allRecipes;
    }

    catch (err) {
        console.log(err);
    }
}

/* Create a new recipe using the given data */
const addRecipe = async function addRecipe (title, ingredients, steps) {

    try {
        if (!title || !ingredients || !steps) {
            throw "You must provide title, ingredients and description";
        }
        else if (typeof(title) !== 'string') {
            throw TypeError(`${title} is not a valid title!`);
        } 
        else if (!Array.isArray(ingredients)) {
            throw TypeError(`${ingredients} is not a valid array of ingredients!`);
        } 
        else if (!Array.isArray(steps)) {
            throw TypeError(`${steps} is not a valid array of steps!`);
        }
        let ID = uuid();
        let newRecipe = {
            _id : ID,
            title: title,
            ingredients: ingredients,
            steps: steps
        };
        const recipeCollection = await recipes();
        const insertRecipe = await recipeCollection.insertOne(newRecipe);

        if (insertRecipe.insertedCount === 0)
            throw "Could not add recipe";

        const newID = await this.getRecipeById(ID);

        return newID;

    }
    catch (err) {
        console.log (err);
    }
}

// Given an id, replace a recipe with provided information
const updateRecipe = async function updateRecipe(id, updatedRecipe) {

    try {
        if (!id) {
            throw "You must provide a id to search for"
        }
        if (typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        }
        if (!updatedRecipe || typeof(updatedRecipe) !== 'object') {
            throw "You must provide an valid updated recipe"
        }
        const recipeCollection = await recipes();
        const updatedRecipeData = {};

        if (updatedRecipe.title) {
            updatedRecipeData.title = updatedRecipe.title;
        }
        if (updatedRecipe.ingredients && (updatedRecipe.ingredients[0].name) && updatedRecipe.ingredients[0].amount) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }
        if (updatedRecipe.steps && Array.isArray(updatedRecipe.steps)) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }
        
        let updateCommand = await recipeCollection.updateOne({_id: id}, 
            {
                $set: updatedRecipeData
            }
        );
        if (updateCommand.modifiedCount === 0)
            throw "Could not update recipe successfully";

        return await this.getRecipeById(id);
    }

    catch (err) {
        console.log(err);
    }
}

// Given an id, update a recipe with provided information
const patchRecipe = async function patchRecipe(id, updatedRecipe) {

    try {
        if (!id) {
            throw "You must provide a id to search for"
        }
        if (typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        }
        const recipeCollection = await recipes();
        const updatedRecipeData = {};

        if (updatedRecipe.title) {
            updatedRecipeData.title = updatedRecipe.title;
        }
        if (updatedRecipe.ingredients && (updatedRecipe.ingredients[0].name) && updatedRecipe.ingredients[0].amount) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }
        if (updatedRecipe.steps && Array.isArray(updatedRecipe.steps)) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }
        
        let updateCommand = await recipeCollection.updateOne({_id: id}, 
            {
                $set: updatedRecipeData
            }
        );
        if (updateCommand.modifiedCount === 0)
            throw "Could not update recipe successfully";

        return await this.getRecipeById(id);
    }

    catch (err) {
        console.log(err);
    }
}

// Remove a recipe by id
const deleteRecipe = async function deleteRecipe(id) {

    try {
        if (!id) {
            throw "You must provide an id to search for"
        }
        if (typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        }
        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({ _id: id });

        if (deletionInfo.deletedCount === 0)
            throw `Could not delete recipe with id of ${id}`;

        return true;
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = {
    firstName: "Qiuan",
    lastName: "Wu",
    studentId: "10409585",
    getRecipeById,
    getAllRecipes,
    addRecipe,
    updateRecipe,
    patchRecipe,
    deleteRecipe
};
