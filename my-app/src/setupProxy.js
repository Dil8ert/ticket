// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

const apiKey = 'c13a07ea-035c-498c-8994-56a0d20381f4'; // Replace with your actual CoinMarketCap API key
const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: apiUrl,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      onProxyReq(proxyReq) {
        proxyReq.setHeader('X-CMC_PRO_API_KEY', apiKey);
      },
    })
  );
};
