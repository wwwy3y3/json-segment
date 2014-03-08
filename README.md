# csv-segment

Single csv file into segments (json format).

## Install

```
  npm install csv-segment
```

## Usage

```javascript
	var csv_segment = require('csv_segment');

	csv_segment('test/data/gender.csv', 10, function(err, result) {
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
