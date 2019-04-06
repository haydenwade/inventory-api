var express = require('express');
var router = express.Router();

let inventory = {
    'fish':{
        price:10,
        serialNum: 'ABC123'
    }
};

//Postman
/*
GET http://localhost:3010/inventory/fish
or GET https://anas-proj.herokuapp.com/inventory/fish
*/
router.get('/inventory/:id', function(req,res){
    res.status(200);
    res.json(inventory[req.params.id]);
});

//Postman
/*
POST http://localhost:3010/inventory
or POST https://anas-proj.herokuapp.com/inventory
{
	"name":"cat",
	"price":15,
	"serialNum": "RED342"
}
*/

router.post('/inventory', function(req,res){
    inventory[req.body.name] = req.body;
    res.status(200);
    res.json('created!');
});


module.exports = router;