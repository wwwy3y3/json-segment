var json_segment = require('./');

json_segment('test/data/color.json', 10, function(err, result) {
	if(err) {
		throw Error(err);
	}else {
		// an json array seperate json to 10 segments
		//console.log(result);
		//console.log(result.length);
	}
})

json_segment('test/data/color.json', 'color', function(err, result) {
	if(err) {
		throw Error(err);
	}else {
		// an json array seperate json to 10 segments
		console.log(result);
		console.log(result.length);
	}
})
