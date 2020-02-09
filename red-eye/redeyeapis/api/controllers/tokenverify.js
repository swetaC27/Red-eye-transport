var jwt = require('jsonwebtoken');
var decodedToken='';
exports.verifyToken = function(req, res,next) {
//function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    //console.log("tokendata------------",tokendata);
    if(err){
        console.log("unauthorized------------------");
        res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
        console.log("success-----");
        res.json(tokendata);
        //next();
    }
  })
}
