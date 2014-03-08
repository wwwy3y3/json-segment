# json-segment

Single json file into segments (json format).

## Install

```
  npm install json-segment
```

## Usage

```javascript
	var json_segment = require('json_segment');

	csv_segment('test/data/gender.json', 10, function(err, result) {
		if(err) {
			throw Error(err);
		}else {
			// an json array seperate csv to 10 segments
			console.log(result);
		}
	})
	
```


## License

MIT [@chilijung](http://github.com/chilijung)
