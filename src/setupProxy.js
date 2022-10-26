const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware([process.env.REACT_APP_API], {
        target: process.env.REACT_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
            [`^${process.env.REACT_APP_API}`]: ''  // 将请求地址中的'/api'重写为空再请求接口（也就是去掉/api）
        }
    }));
};