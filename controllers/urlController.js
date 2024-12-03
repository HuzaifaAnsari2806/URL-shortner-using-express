const URL = require("../models/urls");

const generateNewShortURL = async (req, res) => {
    if (!req.body.url)
        res.status(400).json({ error: "url is required field." })
    const id = (await import('nanoid')).nanoid(8);
    await URL.create({
        shortId: id,
        redirecURL: req.body.url,
        visitHistory: []
    });
    res.status(201).json({ id: id });
}

const redirectToURL = async (req, res) => {
    const id = req.params.id;
    const urlDocument = await URL.findOneAndUpdate({
        shortId: id
    }
        , {
            $push: {
                visitHistory: {
                    timestamp: new Date().toUTCString(),
                }
            }
        });
    res.redirect(urlDocument.redirecURL);
}

const getAllURL = async (req, res) => {
    const collection = await URL.find({});
    res.json({ collection });
}
const getAnalytics = async (req, res) => {
    const document = await URL.findById(req.params.id);
    const clicks = document.visitHistory.length;
    res.json({ clicks: clicks, visitHistory: document.visitHistory });
}

module.exports = {
    generateNewShortURL,
    redirectToURL,
    getAllURL,
    getAnalytics
}