var csv_segment = require('./');

csv_segment('test/data/gender.csv', 10, function(err, result) {
	if(err) {
		throw Error(err);
	}else {
		// an json array seperate csv to 10 segments
		console.log(result);
	}
})
