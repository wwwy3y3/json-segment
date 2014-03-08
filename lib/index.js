var Seg = {};
var fs = require('fs');

module.exports = json_segment;

function json_segment (json_file, seg, cb) {
	Seg.load(json_file, seg, function() {
		cb(null, Seg.json_arr);	
	});	
	
}

Seg.load = function(json_file, seg, cb) {
	if(this.parseJson(json_file)) {
		// this is a raw json
		var parse = JSON.parse(json_file);
		var total = this.total(parse);
		var seg_count = Math.ceil(total / seg);
		this.seg_count = seg_count;
		this.json_arr = [];
		this.segment(parse, total, function() {
			cb();
		});
	} else {
		// a path
		var fs_str = fs.readFileSync(json_file, {encoding: 'utf-8'});
		var parse = JSON.parse(fs_str);
		var total = this.total(parse);
		var seg_count = Math.ceil(total / seg);
		this.seg_count = seg_count;
		this.json_arr = [];
		this.segment(parse, total, function() {
			cb();
		});

	}

}

Seg.segment = function(arr, total, cb) {
	var count = 0;
	var seg_arr = [];

	for(var i = 0; i < total; i++) {
		seg_arr.push(arr[i]);
		count++;
		if(count % this.seg_count == 0) {
			this.json_arr.push(seg_arr);
			seg_arr = [];
		}
		if(count == total - 1) {
			this.json_arr.push(seg_arr);
		}
	}
	cb();
}

Seg.parseJson = function(str) {
	try{
		JSON.parse(str)
	}catch(e) {
		return false;
	}
	return true;
}

Seg.total = function(json) {
	return json.length;
}
