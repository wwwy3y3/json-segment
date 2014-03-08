var node_csv2json = require("node-csv-json");

module.exports = csv_segment;

function csv_segment (csv, seg, cb) {
	node_csv2json({
	    input: csv, 
	    output: null
	 }, function(err, result){
	    if(err) {
	      	cb(err)
	    }else {
	      	cb(null, result)
	    }
	 });
}