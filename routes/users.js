var express = require('express');
var ctrReg = require('../controlers/reg');
var ctrLogin = require('../controlers/login');
var check = require('../middlemare/check');

//路由的实例
var router = express.Router();

//注册
router.get('/reg', check.checkNotLogin, function(req, res, next) {
  res.render('user/reg', { title: '注册' });
});

router.post('/reg', check.checkNotLogin, ctrReg.Reg);

//登录
router.get('/login', check.checkNotLogin, function(req, res, next) {
  res.render('user/login', { title: '登录' });
});
router.post('/login', check.checkNotLogin, ctrLogin.Login);

//退出
router.get('/logout', function(req, res, next) {
    req.session.user = null;
    req.flash('success','用户退出成功!');
    res.redirect('/');
});

module.exports = router;

