var models = require('../models/models');
var util = require('../util/util');

module.exports.Login = function (req, res, next){
    req.body.password = util.md5(req.body.password);
    models.User.findOne({username:req.body.username,password:req.body.password},function(err,doc){
        if(err){
            req.flash('error','用户登录失败！');
            res.redirect('back');
        }else{
            if(doc){
                req.session.user = doc;
                req.flash('success','用户登录成功！');
                res.redirect('/');
            }else{
                req.flash('error','用户不存在 或 密码错误！');
                res.redirect('back');
            }
        }
    })
}