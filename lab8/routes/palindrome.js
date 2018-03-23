const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("result");
});

module.exports = router;