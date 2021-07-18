var service = require('./service'); 

module.exports.goInto = function(req,res){
    res.header('Access-Control-Allow-Origin', '*');
    return res
      .status(200)
      .send({token: service.createToken('token')}); 
}