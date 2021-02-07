module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://vue3-fjord-81553.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
};