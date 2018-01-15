var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var cors = require('cors');
var routine = require('./Routine.js')


app.set("json spaces", 4);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'X-Requested-With, Content-Type, Authorization'
}))

app.listen(process.env.PORT || 3000, () => {
    timer()
    async function timer() {
        await routine.connect()
            .then((response) => {
                console.log(response)
                console.log('passou')
                timer()
            }, (error) => {
                console.log('Este é um erro: \n' + error +'\n-----------------')
            })
    }
})
