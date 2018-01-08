var express = require('express');
var router = express.Router();
var controller = require('./controller.js')

router.get('/',(req,res)=>{
    controller.connect(res);
})

module.exports = router;