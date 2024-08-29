var express = require('express')
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
//  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title: 'Express' });
});

router.post('/submit', function(req,res){
  console.log(req.body);

  MongoClient.connect('mongodb://127.0.0.1:27017',function(err,client){
    if(err){
      console.log('Error');
      
    }else{
      console.log('Database Connected');
     client.db('Crossroads').collection('user').insertOne(req.body)
    }
  })
  res.send('Data received and inserted successfully')
})

module.exports = router;
