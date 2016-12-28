import superagent from 'superagent';
console.log('in API manager');
export default {
    get: (url, params, callback) => {
        superagent
			.get(url)
			.query(params)
			.set('Accept', 'application/json')
			.end(function(err, response) {
				if (err) { 
				    callback(err, null);
				    return;}
				// here check for API failures
				const confirmation = response.body.confirmation;
				console.log('Confirmation: '+ confirmation);
				if (confirmation != 'success') {
				    // send a failure message
				    callback({message:response.body.message, null});
				    return;
				}
				callback(null, response.body);
			});
    },
    post: (url, body, callback) => {
        superagent
            .post(url)
            .send(body)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) { 
				    callback(err, null);
				    return;}
				// here check for API failures
				const confirmation = response.body.confirmation;
				if (confirmation != 'success') {
				    // send a failure message
				    callback({message:response.body.message, null});
				    return;
				}
				callback(response, response.body);
            })
        
    },
    put: () => {
        
    },
    del: () => {
        
    }
}