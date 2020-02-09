var express = require('express');
var router = express.Router();
var User = require('../models/nuActiveDirectoryModel');
var tokenCheck = require('../controllers/tokenverify');
var jwt = require('jsonwebtoken');

router.post('/register',  function(req,res,next){
  console.log("req body",req.body);
  //return req.body;
  var user = new User({
    emailID: req.body.emailID,
    password: User.hashPassword(req.body.password)
  });

  let promise = user.save();

  promise.then(function(doc){
    return res.status(201).json(doc);
  })

  promise.catch(function(err){
    return res.status(501).json({message: 'Error registering user.'})
  })
})

router.post('/login', function(req,res,next){
    //console.log("login body",req.body);

   let promise = User.findOne({emailID:req.body.emailID}).exec();

   promise.then(function(doc){
    //console.log("login body doc",doc);
    if(doc) {
      if(doc.isValid(req.body.password)){
          console.log("login body doc",req.body,doc);
          // generate token
          let token = jwt.sign({ objid:doc._id,emailID:doc.emailID,firstName:doc.firstName,nuid:doc.NUID,role:doc.userType},'secret', {expiresIn : '3h'});

          return res.status(200).json(token);

      } else {
        return res.status(501).json({message:' Invalid Credentials'});
      }
    }
    else {
      return res.status(501).json({message:'User email is not registered.'})
    }
   });

   promise.catch(function(err){
     return res.status(501).json({message:'Some internal error'});
   })
})

router.get('/userName', tokenCheck.verifyToken, function(req,res,next){
    console.log("req-----",req,"-----res",res)
    return res.status(200).json(decodedToken.username);
})

/*
var decodedToken='';
function verifyToken(req,res,next){
  let token = req.query.token;

  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}
*/
module.exports = router;