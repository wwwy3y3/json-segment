# json-segment

Single json file into segments (json format).

## Install

```
  npm install json-segment
```

## API

- first: json file resource
- second: [number or string] seperate rules
- callback: callback function

## Usage

#### Seperate by number

If the second argument is a number, this will seperate the files into the number given. In the following exmaple the file is seperate into 10 segments.

```javascript
	var json_segment = require('json_segment');

	json_segment('test/data/gender.json', 10, function(err, result) {
		if(err) {
			throw Error(err);
		}else {
			// an json array seperate to 10 segments
			console.log(result);
		}
	})
	
```

#### Seperate by key-value

If the second argument is a string, it is defined to seperate the data by using the key-value, the same value in the same key, will seperate into the same json array in the output.

```javascript
	var json_segment = require('json_segment');

	json_segment('test/data/gender.json', 'color', function(err, result) {
		if(err) {
			throw Error(err);
		}else {
			// an json array seperate to segments by key-value
			console.log(result);
		}
	})
	
```

## License

MIT [@chilijung](http://github.com/chilijung)
