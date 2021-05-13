crypto = require('crypto');
request = require('request');

function callback(error, response, body) {
   console.log(body);
}

/*
//fake account id.  Replace with a real one.
account_id = '1234asdf1234asdf0100000a' 
*/

//fake api secret.  Replace with a real one.
api_secret = 'asD1234asDF1234aSDF1234AsdF1234a' ;

//fake api key.  Replace with a real one.
api_key = '1ASDFaSDF1234ASd';

url = 'https://api.coinbase.com/v2/accounts'

epoch = Math.floor(+new Date() / 1000);

my_hmac = crypto.createHmac('sha256', api_secret);
my_hmac.update(epoch + 'POST' + '/v2/accounts' + '');
signature = my_hmac.digest('hex');

request_options = {
  url: url,
  headers : {'CB-ACCESS-KEY' : api_key,
             'CB-ACCESS-SIGN': signature, 
             'CB-ACCESS-TIMESTAMP': epoch,
	     'Content-Type': 'application/json'
	  
  }

};

request(request_options,callback);






