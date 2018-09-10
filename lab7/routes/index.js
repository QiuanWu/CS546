const recipesRoutes = require("./recipes");

const constructorMethod = (app) => {
    app.use("/recipes", recipesRoutes);
    
    app.use("*", (req, res) => {
        res.status(404).json({error: "Route Not Found"});
    });

};

module.exports = constructorMethod;
