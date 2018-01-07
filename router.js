var express = require('express');
var router = express.Router();
var controller = require('./controller.js')
var controller = new controller()

router.get('/',(req,res)=>{
    controller.connect(res);
})

module.exports = router;