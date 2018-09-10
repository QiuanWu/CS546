const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.json({
            "storyTitle": "Camping Story",
            "story": "&emsp;Many years ago when I was in elementary school, I went to a camping trip with classmates and at night we all went arund the campfire and told stories. One of my teachers pointed up at the hill where a bunch of deer had gathered. He explained that baby dear make certain noises to call their mothes over. He said if we were really quiet we could hear them. Suddenly this huge black guy came out from the forest and yelled YO MAMA WHERE YOU AT!"
        });
    }
    catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
