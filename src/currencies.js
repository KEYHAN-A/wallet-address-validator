const XRPValidator = require('./ripple_validator')
const ETHValidator = require('./ethereum_validator')
const BTCValidator = require('./bitcoin_validator')
const ADAValidator = require('./cardano_validator')
const EOSValidator = require('./eos_validator')
const XLMValidator = require('./lumen_validator')

// defines P2PKH and P2SH address types for standard networks
const CURRENCIES = [{
  name: 'Bitcoin',
  symbol: 'btc',
  addressTypes: { prod: ['00', '05'] },
  validator: BTCValidator
}, {
  name: 'BitcoinCash',
  symbol: 'bch',
  addressTypes: { prod: ['00', '05'] },
  validator: BTCValidator
}, {
  name: 'LiteCoin',
  symbol: 'ltc',
  addressTypes: { prod: ['30', '05', '32'] },
  validator: BTCValidator
}, {
  name: 'Tron',
  symbol: 'trx',
  addressTypes: { prod: ['41'] },
  validator: BTCValidator
}, {
  name: 'DogeCoin',
  symbol: 'doge',
  addressTypes: { prod: ['1e', '16'] },
  validator: BTCValidator
}, {
  name: 'Tether',
  symbol: 'usdt',
  addressTypes: { prod: ['00', '05'] },
  validator: BTCValidator
  //validator: ETHValidator
}, {
  name: 'Ripple',
  symbol: 'xrp',
  validator: XRPValidator
}, {
  name: 'Neo',
  symbol: 'neo',
  addressTypes: { prod: ['17'] },
  validator: BTCValidator
}, {
  name: 'Ethereum',
  symbol: 'eth',
  validator: ETHValidator
}, {
  name: 'Cardano',
  symbol: 'ada',
  validator: ADAValidator
}, {
  name: 'BasicAttentionToken',
  symbol: 'bat',
  validator: ETHValidator
}, {
  name: 'EOS',
  symbol: 'eos',
  validator: EOSValidator
}, {
  name: 'BitTorrent',
  symbol: 'btt',
  addressTypes: { prod: ['41'] },
  validator: BTCValidator
}, {
  name: 'Holo',
  symbol: 'HOT',
  validator: ETHValidator
}, {
  name: 'Chainlink',
  symbol: 'link',
  validator: ETHValidator
}, {
  name: 'Stellar Lumens',
  symbol: 'xlm',
  validator: XLMValidator
}, {
  name: 'Ravencoin',
  symbol: 'rvn',
  validator: BTCValidator,
  addressTypes: { prod: ['3c'] }
}, {
  name: 'Waves',
  symbol: 'waves',
  addressTypes: { prod: ['0157'] },
  expectedLength: 26,
  hashFunction: 'blake256keccak256',
  regex: /^[a-zA-Z0-9]{35}$/,
  validator: BTCValidator
}]

module.exports = {
  getByNameOrSymbol: function (currencyNameOrSymbol) {
    var nameOrSymbol = currencyNameOrSymbol.replace(' ', '').toLowerCase() // Remove spaces and make lowercase
    return CURRENCIES.find(function (currency) {
      return currency.name.replace(' ', '').toLowerCase() === nameOrSymbol || currency.symbol.replace(' ', '').toLowerCase() === nameOrSymbol
    })
  },
  CURRENCIES
}
