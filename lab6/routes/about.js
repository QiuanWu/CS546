const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.json({
            "name": "Qiuan Wu",
            "cwid": "10409585",
            "biography": "My name is Qiuan Wu. \nI am a CS junior student at Stevens. \nI grew up in China.",
            "favoriteShows": ["Game of Throne", "The 100", "The Walking Dead", "Prison Break", "The Friends"],
            "hobbies": ["Basketball", "Guitar", "Pop music", "Coding"]
        });
    }
    catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
