var crypto = require('crypto');
var request = require('request');
var url = require('url');

//fake api secret.  Replace with a real one.
api_secret = 'dummyapisecret' ;

//fake api key.  Replace with a real one.
api_key = 'dummyapikey';

coinbaseUrl = 'https://api.coinbase.com/v2/accounts'

epoch = Math.floor(+new Date() / 1000);

console.log(request.method);

my_hmac = crypto.createHmac('sha256', api_secret);
my_hmac.update(epoch + "GET" + url.parse(coinbaseUrl).pathname + '');
signature = my_hmac.digest('hex');

request_options = {
  url: coinbaseUrl,
  headers : {'CB-ACCESS-KEY' : api_key,
             'CB-ACCESS-SIGN': signature, 
             'CB-ACCESS-TIMESTAMP': epoch,
	     'Content-Type': 'application/json'
	  
  }

};

request(request_options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(body).data[0]);
});




