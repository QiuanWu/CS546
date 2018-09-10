const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const users = [
    {
        _id: "1245325124124",
        username: "masterdetective123",
        hashedPassword: "$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.",
        firstName: "Sherlock",
        lastName: "holmes",
        profession: "Detective",
        bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a 'consulting detective' in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."
    },
    {
        _id: "723445325124124",
        username: "lemon",
        hashedPassword: "$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm",
        firstName: "Elizabeth",
        lastName: "Lemon",
        profession: "Writer",
        bio: "Elizabeth Miervaldis 'Liz' Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan."
    },
    {
        _id: "813445325124124",
        username: "theboywholived",
        hashedPassword: "$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK",
        firstName: "Harry",
        lastName: "Potter",
        profession: "Student",
        bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."
    }
];

async function findUserbyName(username) {
    try {
        var user = users.find((obj) => {
            return username === obj.username;
        });
        if (!user)
            throw "Cannot find user with this name";
        else
            return user;
    }
    catch (err) {
        throw err;
    }
};

async function findUserbyId(id) {
    try {
        var user = users.find((obj) => {
            return id === obj._id;
        });
        if (user === undefined)
            throw "Cannot find user with this id";
        else
            return user;
    }
    catch (err) {
        throw err;
    }
}


router.get("/", (req, res) => {
    if (req.cookies && req.cookies.AuthCookie) {
        res.redirect('/private');
    }
    else
        res.render("../views/login", {layout: false});
});

router.get("/private", async (req, res) => {
    if (req.cookies && req.cookies.AuthCookie) {
        var user = await findUserbyId(req.cookies.AuthCookie);
        if (user) {
            res.render("../layouts/main", { Username: user.username, Firstname: user.firstname, Lastname: user.lastname, Profession: user.profession, Bio: user.bio });
        }
    }
    else {
        res.status(403).render("../views/error", {layout: false});
    }
});

router.post("/login", async (req, res) => {
    const anHourAgo = new Date();
    anHourAgo.setHours(anHourAgo.getHours() - 1);
    var user = await findUserbyName(req.body.username);
    if (user === undefined) {
        res.render("..views/login", { error: "Invalid username/password!" });
    }
    var textPass = req.body.password;
    if (await bcrypt.compare(textPass, user.hashedPassword)) {
        res.cookie('AuthCookie', user._id, { expires: anHourAgo });
        res.redirect('/private');
    }
    else {
        res.render("../views/login", { error: "Invalid username/password!", layout: false});
    }
});

router.get("/logout", async (req, res) => {
    res.clearCookie('AuthCookie');
    res.render("../views/login",{layout: false});
});


  
module.exports = router;