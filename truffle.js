require('babel-register');
require('babel-polyfill');
require('dotenv/config');
const PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
	networks: {
		kovan: {
			provider: process.env.KOVAN_PRIV ? new PrivateKeyProvider(process.env.KOVAN_PRIV, "https://dev.reftoken.com") : "",
			gasPrice: 10000000000, // 10 gwei
			gas: 8000000,
			network_id: 4
		},
		mainnet: {
			provider: process.env.MAINNET_PRIV ? new PrivateKeyProvider(process.env.MAINNET_PRIV, "https://main.reftoken.com") : "",
			gasPrice: 2000000000, // 2 gwei
			network_id: "*"
		}
	}
};
