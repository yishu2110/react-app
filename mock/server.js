let express = require('express');
let app = express();
let ad = require('./home/ad');
//广告的接口
app.get('/api/ad', (req,res)=>{
    res.send(ad);
   //console.log(ad);
});
app.listen(5000);
