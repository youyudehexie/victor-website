var Production = require('../models').Production;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.category = function(req, res, next){
    var type = req.params.type;
    if(!type){ 
        return res.send(500);
    }

    Production.find({type: type}, function(err, data){
        res.send(data)
    })
    
}

exports.production = function(req, res, next){

    //var type = req.params.type;
    var type = req.query.type;
    var productId = req.query.productId;
    if(!type || !productId){ 
        return res.send(500);
    }

    Production.find({type: type, productId: productId}, function(err, data){
        res.send(data)
    })

}
