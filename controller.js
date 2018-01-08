var request = require('request-promise')

module.exports = {


    connect: (res) => {
        tentar()

        async function tentar() {
            var req1 = function(){
               return request('https://api.hitbtc.com/api/2/public/trades/BCNBTC?limit=1')
            }

            var req2 = function(){
                return request('https://api.hitbtc.com/api/2/public/trades/DCNUSD?limit=1')
            }
            
            var req3 = function(){
                return request('https://api.hitbtc.com/api/2/public/trades/DENTETH?limit=1')
            }
            
            var req4 = function(){
                return request('https://api.hitbtc.com/api/2/public/trades/XRPUSDT?limit=1')
            }
            
            var req5 = function(){
                return request('https://api.hitbtc.com/api/2/public/trades/DIMUSD?limit=1')
            }

            var [final1,final2,final3,final4,final5] = await Promise.all([req1(),req2(),req3(),req4(),req5()])
            
            res.json({
                'BCNBTC': JSON.parse(final1),
                'DCNUSD': JSON.parse(final2),
                'DENTETH': JSON.parse(final3),
                'XRPUSD': JSON.parse(final4),
                'DIMUSD': JSON.parse(final5),
            })
        }
    }


}







