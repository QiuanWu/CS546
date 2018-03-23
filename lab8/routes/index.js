const palindromeRoutes = require('./palindrome');
const resultRoutes = require('./result');

const constructorMethod = function constructorMethod(app) {
    //app.use("/result", palindromeRoutes);
    app.use('/result', resultRoutes);
    
    app.use("/", (req, res) => {
        res.render("palindrome");
    });
    app.use("*", (req, res) => {
        res.redirect("/");
    });
};


module.exports = constructorMethod;