var request = require('request')


class controller {


    connect(res){
        request('https://api.hitbtc.com/api/2/public/trades/BCNBTC?limit=5',(err,response, body)=>{
            res.json({body:JSON.parse(body)})
        })
    }    



}



module.exports = controller