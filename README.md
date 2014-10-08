To use:


1)Install the "request" library

        npm install request
 
2) Obtain your Coinbase API Key and API Secret

3) In all of the examples, replace the api key,
   api secret and account id with real ones

4) Type the following in the console.

        $nodejs get_balance.js

You should see something like this print to the console

{"amount":"0.10100000","currency":"BTC"}


5)Type the following in the console (if you actually want to send a bitcoin...)

        $nodejs send_bitcoin.js

You should see something like this print to the console

{"success":true,"transaction":{"id":"REDACTED","created_at":"2014-10-07T19:42:37-07:00","hsh":null,"amount":{"amount":"-0.00300500","currency":"BTC"},"request":false,"status":"pending","sender":{"id":"REDACTED","email":"redacted@redacted.com","name":"redacted@redacted.com"},"recipient_address":"REDACTED","notes":"Sent 1.0 USD to my cool aunt","idem":""}}


