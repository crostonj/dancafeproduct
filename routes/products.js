var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var productList = getProducts();
  res.send(productList);
});

router.post('/search', function(req, res, next){
  var name = req.body.name;
  var productList = getProducts();
  
  var results = [];
  productList.forEach(function(item){
    if(item.name.toLowerCase().includes(name.toLowerCase())){
      results.push(item);
    }
  });
  
  res.send(results);
});

router.post('/advsearch', function(req, res, next){
  var searchdata = req.body.searchdata;
  var productList = getProducts();
  
  var results = [];
  productList.forEach(function(item){
    if(item.name.toLowerCase().includes(searchdata.name.toLowerCase())){
      results.push(item);
    }
  });
  
  res.send(results);
});


function getProducts(){

  var productList = [];
  var product1 = {
    "id": "9ba1ea89-7c8d-4b4f-b985-364d458d32e6",
    "name": "Mouse",
    "description": "Computer mouse",
    "price": "59.99"
  };

  var product2 = {
    "id": "53bff6a5-aae9-4913-bcd4-0eca258be5ed",
    "name": "Keyboard",
    "description": "Computer keyboard",
    "price": "129.99"
  };

  var product3 = {
    "id": "0d9dde7b-60a4-4418-a300-fea94d3e2631",
    "name": "Display",
    "description": "Computer Display",
    "price": "629.99"
  };
  

  productList.push(product1);
  productList.push(product2);
  productList.push(product3);

  return productList;
}
module.exports = router;
