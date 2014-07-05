var json_segment = require('./');
var obj2= [{ww:1},{ww:2},{ww:3},{ww:4},{ww:5},{ww:6},{ww:7},{ww:8},{ww:9},{ww:10}];

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

json_segment(obj2, 2, function(err, result) {
	if(err) {
		throw Error(err);
	}else {
		console.log(result);
	}
})

json_segment(obj2, 5, function(err, result) {
	if(err) {
		throw Error(err);
	}else {
		console.log(result);
	}
})


json_segment(obj2, 3, function(err, result) {
	if(err) {
		throw Error(err);
	}else {
		console.log(result);
	}
})
