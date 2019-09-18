### API

##### validate (address ,[ currency = 'bitcoin', [networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol.
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified.

### Currencies 
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* Ethereum/eth `'Ethereum'` or `'eth'`
* Ripple/xrp `'Ripple'` or `'xrp'`
* Tron/trx `'Tron'` or `'trx'`
* Holo/HOT `'Holo'` or `'HOT'`
* Chainlink/link `'Chainlink'` or `'link'`
* Ravencoin/rvn `'Ravencoin'` or `'rvn'`
* BasicAttentionToken/bat `'BasicAttentionToken'` or `'bat'`
* BitTorrent/btt `'BitTorrent'` or `'btt'`
* LiteCoin/ltc `'LiteCoin'` or `'ltc'`
* BitcoinCash/bch `'BitcoinCash'` or `'bch'`
* Stellar Lumens/xlm `'Stellar Lumens'` or `'xlm'`
* DogeCoin/doge `'DogeCoin'` or `'doge'`
* Cardano/ada `'Cardano'` or `'ada'`
* Neo/neo `'Neo'` or `'neo'`
* Tether/usdt `'Tether'` or `'usdt'`
* EOS/eos `'EOS'` or `'eos'`

***

### Usage Example
```javascript
var valid = WAValidator.validate( walletAddress , currencyType );
if(valid)
    console.log('valid')
else
    console.log('invalid')
```
#### Node
```javascript
var WAValidator = require('wallet-address-validator');
```
#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```
