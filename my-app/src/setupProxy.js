// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/cryptocurrency',
    createProxyMiddleware({
      target: 'https://pro-api.coinmarketcap.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/cryptocurrency': '/v1/cryptocurrency',
      },
      headers: {
        'X-CMC_PRO_API_KEY': 'c13a07ea-035c-498c-8994-56a0d20381f4', // Replace with your actual CoinMarketCap API key
      },
    })
  );
};
