require('dotenv').load();
var express = require('express');
var router  = express.Router();
var api = require('../api');
var createToken = require('../middleware/createToken');
var sha1 = require('sha1');

router.post('/login', function (req, res, next) {
  var name = req.body.account;
  var password = req.body.checkPass;
  password = sha1(password);
  api.getUserByName(name).then(user => {
    console.log(user);
    if (user && password == user.password) {
      res.json({
        code: 200,
        token: createToken(name)
      })
    } else {
      res.json({
        code: -200,
        message: '用户名或密码错误'
      })
    }
  }).catch(err => {
    next(err)
    return res.json({
      code:-200,
      message:err.toString()
    })
  })
})

module.exports = router;