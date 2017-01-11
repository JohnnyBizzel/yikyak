var Zone = require("../models/Zone");

// CRUD operations
// pre-processing goes here for example setting up an array
// from the data inputted.
module.exports = {
    
    find: function(params, callback){
        Zone.find(params, function(err, zones){
            if (err) {
                callback(err, null);
                return;
            }
            callback(err, zones);
        });
    },
    findById:function(id, callback){
        Zone.findById(id, function(err, zone){
            if (err) {
                callback(err, null);
                return;
            }
            callback(err, zone);
        });
    },
    create:function(params, callback){
        // split up an array of zip codes
        // var zips = params['zipCodes'];
        // var zip = zips.split(',');
        // var newZips = [];
        // zip.forEach(function(zipCode){
        //   newZips.push(zipCode.trim()); 
        // });
        // params['zipCodes'] = newZips;
        
        Zone.create(params, function(err, zone) {
            if (err) {
                console.log(err);
                callback(err, null);
                return;
            }
            callback(null, zone);
        });      
    },
    update:function(id,params, callback){
        Zone.findByIdAndUpdate(id, params,{new:true}, function(err, zone){
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, zone);

        });
        
    },

    delete:function(id, callback){
        Zone.findByIdAndRemove(id, function(err){
             if (err) {
                callback(err, null);
                return;
            }
            callback(null, null);
        });
    }
};