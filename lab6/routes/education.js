const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.json({
            "schoolName": "Luohu Foreign Language School",
            "degree": "High School Degree",
            "favoriteClass": "Math",
            "favoriteMemory": "I got highest score in Math midterm."
        });
    }
    catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
