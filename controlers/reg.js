
var models = require('../models/models');
var util = require('../util/util');

module.exports.Reg = function (req, res, next){
    var user = req.body;
    if(user.password != user.repassword){
        res.redirect('back');
    }else{
        req.body.password = util.md5(req.body.password);
        req.body.avatar = 'https://secure.gravatar.com/avatar/'+util.md5(req.body.email)+'?s=48';
        models.User.create(req.body,function(err,doc){
            if(err){
                req.flash('error','用户注册失败！');
            }else{
                req.flash('success','用户注册成功！');
                res.redirect('/users/login');
            }
        });
    }
}