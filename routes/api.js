var express = require('express');
var router = express.Router();
var ZoneCtlr = require('../controllers/ZoneController');
var controllers = require("../controllers");

router.get("/:resource", function(req, res, next){
    console.log('inside API js - controller route');
    var resourceFrom = req.params.resource;
    var controller = controllers[resourceFrom];
    
    if (controller == null) {
        res.json({ confirmation: 'fail',
                    message: 'User made invalid resource request'
        });
        return;
    }
    
    // call the correct controller specified by the http request
    controller.find(req.query, function(err, results){
        if (err){
                res.json({ confirmation: 'fail',
                    message: err
                });
                return;
            }
            res.json({ confirmation: 'success',
                    message: results
        });
    });

  
});

router.get("/:resource/:id", function(req, res, next){
    var resource = req.params.resource;

    var id = req.params.id;
    var controller = controllers[resource];
    
    if (controller == null) {
        res.json({ confirmation: 'fail',
                    message: 'User made invalid resource request'
        });
        return;
    }
    
    // call the correct controller specified by the http request
    controller.findById(id, function(err, result){
           if (err){
                res.json({ confirmation: 'fail',
                    message: 'Not found'
                });
                return;
            }
            
            res.json({ confirmation: 'success',
                    message: result
                });
            
    });
    
});

router.post("/:resource", function(req, res, next){
    var resource = req.params.resource;

    var controller = controllers[resource];
    
    if (controller == null) {
        res.json({ confirmation: 'fail',
                    message: 'Invalid resource request on POST to: ' + resource
        });
        return;
    }
    
    controller.create(req.body, function(err, result) {
        if (err){
            res.json({ confirmation: 'fail',
                message: err
            });
            console.log(err);
            return;
        }
        
        res.json({ confirmation: 'success',
                message: result
            });
        
    });

});

module.exports = router;