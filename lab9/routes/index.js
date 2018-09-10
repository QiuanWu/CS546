const palindromeRoutes = require('./palindrome');

const constructorMethod = function constructorMethod(app) {
    app.use('/', palindromeRoutes);
    app.use("*", (req, res) => {
        res.redirect("/");
    });
};

module.exports = constructorMethod;