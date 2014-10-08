crypto = require('crypto')
request = require('request')

function callback(error, response, body) {
   console.log(body)
}

//fake bitcoin wallet.  Replace with a real one.
aunts_bitcoin_wallet = '1234ASDF1234asdf1234asdf1ASDF12334'

//fake account id.  Replace with a real one.
account_id = '1234asdf1234asdf0100000a' 

//fake api secret.  Replace with a real one.
api_secret = 'asD1234asDF1234aSDF1234AsdF1234a' 

//fake api key.  Replace with a real one.
api_key = '1ASDFaSDF1234ASd'

url = 'https://api.coinbase.com/v1/transactions/send_money'

my_hmac = crypto.createHmac('sha256', api_secret)

nonce = new Date().getTime() * 1e6

body = JSON.stringify({  
		    transaction: {
		    to: aunts_bitcoin_wallet,
		    amount_string: '1.0',         
                    amount_currency_iso: 'USD',   //Going to send 1 USD worth of bitcoin to my aunt's bitcoin wallet
		    notes: 'Sent 1.0 USD to my cool aunt'
		  }})

my_hmac.update(nonce + url + body)

signature = my_hmac.digest('hex')

request_options = {
  url: url,
  method : 'POST',
  headers : {'ACCESS_KEY' : api_key,
             'ACCESS_SIGNATURE': signature, 
             'ACCESS_NONCE': nonce,
	     'Content-Type': 'application/json'
	  
  },

  body: body
};


request(request_options,callback)






