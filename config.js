var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var cors = require('cors');

app.set("json spaces", 4);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'X-Requested-With, Content-Type, Authorization'
}))

app.listen(process.env.PORT || 3000);