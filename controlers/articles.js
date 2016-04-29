var models = require('../models/models');

module.exports.Add = function (req, res){
    res.render('article/add', { title:'发表文章',article :{} });
}
module.exports.Detail = function (req, res){
    var article = req.body;
    var user = req.session.user;


}