/* global describe it */

var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined'

var chai = isNode ? require('chai') : window.chai
var expect = chai.expect

var WAValidator = isNode ? require('../src/wallet_address_validator') : window.WAValidator

function valid (address, currency, networkType) {
  var result = WAValidator.validate(address, currency, networkType)
  expect(result).to.equal(true)
}

function invalid (address, currency, networkType) {
  var result = WAValidator.validate(address, currency, networkType)
  expect(result).to.equal(false)
}

describe('WAValidator.validate()', function () {
  describe('valid results', function () {
    it('should return true for correct bitcoin addresses', function () {
      valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'prod')
      valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin')
      valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez')
      valid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd')
      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin')
      // segwit addresses
      valid('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bitcoin')
      valid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7', 'bitcoin')
      valid('bc1pw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7k7grplx', 'bitcoin')
      valid('BC1SW50QA3JX3S', 'bitcoin')
      valid('bc1zw508d6qejxtdg4y5r3zarvaryvg6kdaj', 'bitcoin')
      valid('tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy', 'bitcoin')
      invalid('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'bitcoin')
      invalid('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5', 'bitcoin')
      invalid('BC13W508D6QEJXTDG4Y5R3ZARVARY0C5XW7KN40WF2', 'bitcoin')
      invalid('bc1rw5uspcuh', 'bitcoin')
      invalid('bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90', 'bitcoin')
      invalid('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P', 'bitcoin')
      invalid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sL5k7', 'bitcoin')
      invalid('bc1zw508d6qejxtdg4y5r3zarvaryvqyzf3du', 'bitcoin')
      invalid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3pjxtptv', 'bitcoin')
      invalid('bc1gmk9yu', 'bitcoin')
    })

    it('should return true for correct bitcoincash addresses', function () {
      valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoincash')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoincash')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BCH')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'prod')
      valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoincash')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoincash')
    })

    it('should return true for correct litecoin addresses', function () {
      valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin')
      valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC')
      valid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin')
      valid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin')
      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin')
    })

    it('should return true for correct Tron addresses', function(){
      valid('TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t', 'trx')
    })

    it('should return true for correct Tether addresses', function(){
      valid('1qkttXJBivvFmgrNRxMzhKNtL2xGuim25', 'usdt')
    })

    it('should return true for correct dogecoin addresses', function () {
      valid('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin')
      valid('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin')
      valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin')
      valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE')
      valid('DFs6qrdCp4K4evv6jU5R3y2WjaWQbXzGsX', 'DOGE')
      // p2sh addresses
      valid('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin')
    })

    it('should return true for correct Ethereum addresses', function () {
      valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum')
      valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum')
      valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'ETH')
      valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH')
      valid('0x52908400098527886E0F7030069857D2E4169EE7', 'ETH')
      valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH')
      valid('0xde709f2102306220921060314715629080e2fb77', 'ETH')
      valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH')
      valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH')
      valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH')
      valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH')
    })

    it('should return true for correct BAT addresses', function () {
      valid('0x0d8775f648430679a709e98d2b0cb6250d2887ef', 'bat')
    })

    it('should return true for correct Ripple addresses', function () {
      valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'ripple')
      valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'XRP')
      valid('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV', 'XRP')
      valid('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'XRP')
      valid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN', 'XRP')
    })

    it('should return true for correct neo addresses', function () {
      valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neo')
      valid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ1X', 'NEO')
    })

    it('should return true for correct BitTorrent addresses', () => {
      valid('TJED82158WeEcP67wtKK5BeV6rMagJfeA4', 'btt')
    })
    it('should return true for correct Holo addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'hot')
    })
    it('should return true for correct Chainlink addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'link')
    })
    it('should return true for correct Stellar Lumens addresses', () => {
      valid('GAHK7EEG2WWHVKDNT4CEQFZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A', 'xlm')
    })
    it('should return true for correct Cardano addresses', () => {
      valid('Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm', 'ada')
      valid('4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf', 'cardano')
    })
    it('should return true for correct Ravencoin addresses', () => {
      valid('RFnM9d8sjAPn24yJi4VACWWWZjaYyFwd8K', 'rvn')
    })
    it('should return true for correct EOS addresses', () => {
      valid('keyhanwallet', 'eos')
      valid('keypar12345b', 'eos')
    })
    it('should return true for correct Waves addresses', () => {
      valid('3PN5u5AAP4UnCapLsGXone7t3E9B4TGs2QW', 'waves')
    })
  })

  describe('invalid results', function () {
    function commonTests (currency) {
      invalid('', currency) // reject blank
      invalid('%%@', currency) // reject invalid base58 string
      invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency) // reject invalid address
      invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency) // reject transaction id's
      // testnet
    }

    it('should return false for incorrect bitcoin addresses', function () {
      commonTests('bitcoin')
    })

    it('should return false for incorrect bitcoincash addresses', function () {
      commonTests('bitcoincash')
    })

    it('should return false for incorrect litecoin addresses', function () {
      commonTests('litecoin')
    })

    it('should return false for incorrect dogecoin addresses', function () {
      commonTests('dogecoin')
    })

    it('should return false for incorrect Tron addresses', function () {
      commonTests('tron')
    })

    it('should return false for incorrect Tether addresses', function () {
      commonTests('usdt')
    })

    it('should return false for incorrect Ethereum addresses', function () {
      invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum')
      invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum')
      invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum')
      invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum')
      invalid('0xff4d6793F584a473', 'ethereum')
    })

    it('should return false for incorrect BAT addresses', function () {
      invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'bat')
      invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'bat')
      invalid('0xff4d6793F584a473', 'bat')
    })

    it('should return false for incorrect ripple addresses', function () {
      invalid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'ripple')
      invalid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'XRP')
      invalid('6xAff4d6793F584a473348EbA058deb8ca', 'ripple')
      invalid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'ripple')
    })

    it('should return false for incorrect neo addresses', function () {
      commonTests('neo')
      invalid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTa', 'neo')
      invalid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ10', 'NEO')
    })
    it('should return false for incorrect BitTorrent addresses', () => {
      invalid('TJED82157WeEcP67wtKK5BeV6rMagJfeA4', 'btt')
    })
    it('should return false for incorrect Holo addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'hot')
    })
    it('should return false for incorrect Chainlink addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'link')
    })
    it('should return false for incorrect Stellar Lumens addresses', () => {
      invalid('GAHK7EEG2WWHVKDNT4CEQDZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A', 'xlm')
    })
    it('should return false for incorrect Cardano addresses', () => {
      invalid('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', 'ada')
    })
    it('should return false for incorrect Ravencoin addresses', () => {
      invalid('RFnM9d8sjAPn24yJi4VACWWWZjaYyFwd8k', 'rvn')
    })
    it('should return false for incorrect EOS addresses', () => {
      invalid('1keyhanwalle', 'eos')
      invalid('KeyhanWallet', 'eos')
      invalid('keyhan678912', 'eos')
      invalid('keyhanwallet12345', 'eos')
      invalid('keyhanwalle.', 'eos')
    })
    it('should return false for incorrect Waves addresses', () => {
      invalid('3PN5u5AAP4UnCapLsGXone7t3e9B4TGs2QW', 'waves')
    })
  })
})
