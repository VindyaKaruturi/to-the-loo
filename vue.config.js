const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_mixin.scss";
          `,
      },
    },
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      config.devtool('eval');
      config.module
        .rule('babel-plugin-istanbul')
        .test(/\.(ts|js)$/)
        .enforce('post')
        .include
        .add(path.resolve(__dirname, '/src'))
        .end()
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({ esModules: true });
    }
  },
};
