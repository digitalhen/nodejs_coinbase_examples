crypto = require('crypto')
request = require('request')

function callback(error, response, body) {
   console.log(body)
}

//fake account id.  Replace with a real one.
account_id = '1234asdf1234asdf0100000a' 

//fake api secret.  Replace with a real one.
api_secret = 'asD1234asDF1234aSDF1234AsdF1234a' 

//fake api key.  Replace with a real one.
api_key = '1ASDFaSDF1234ASd'

url = 'https://api.coinbase.com/v1/accounts/' + account_id + '/balance'

my_hmac = crypto.createHmac('sha256', api_secret)

nonce = new Date().getTime() * 1e6

my_hmac.update(nonce + url)

signature = my_hmac.digest('hex')

request_options = {
  url: url,
  headers : {'ACCESS_KEY' : api_key,
             'ACCESS_SIGNATURE': signature, 
             'ACCESS_NONCE': nonce,
	     'Content-Type': 'application/json'
	  
  }

};

request(request_options,callback)






