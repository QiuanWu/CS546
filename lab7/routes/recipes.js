const data = require("../data");
const recipeData = data.recipes;
const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let recipeList = await recipeData.getAllRecipes();
        res.json(recipeList);
    } 
    catch (err) {
        res.status(400).json(err);   
    }
});

router.get("/:id", async (req, res) => {
    try {
        let recipe = await recipeData.getRecipeByID(req.params.id);
        res.json(recipe);
    } 
    catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        let recipe = await recipeData.addRecipe(req.body.title, req.body.ingredients, req.body.steps);
        res.json(recipe);
    } 
    catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        let updatedRecipe = await recipeData.updateRecipe(req.params.id, req.body);
        res.json(updatedRecipe);
    } 
    catch (err) {
        res.status(400).json(err);   
    }
});

router.patch("/:id", async (req, res) => {
    try {
        let updatedRecipe = await recipeData.patchRecipe(req.params.id, req.body);
        res.json(updatedRecipe);
    } 
    catch (err) {
        res.status(400).json(err);   
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await recipeData.deleteRecipe(req.params.id);
        res.status(200).json({message : "Item deleted"});
    } 
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
