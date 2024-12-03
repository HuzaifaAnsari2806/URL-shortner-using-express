const express = require('express');
const router = express.Router();
const { generateNewShortURL, redirectToURL, getAllURL, getAnalytics } = require("../controllers/urlController");


router.route("/")
    .get(getAllURL)
    .post(generateNewShortURL);

router.route("/:id")
    .get(redirectToURL);

router.route("/analytics/:id")
    .get(getAnalytics);

module.exports = router;