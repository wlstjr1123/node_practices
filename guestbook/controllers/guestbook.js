const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('list', {
            list: results || []
        });
    },
    add: async function(req, res) {
        const results = await model.insert(req.body);
        res.redirect("/");
    },
    delete: async function(req, res) {
        const results = await model.delete(req.params.no);
        res.redirect("/");
    }
}