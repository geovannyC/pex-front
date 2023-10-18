/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: "standalone",
  loaders: ['style-loader', 'css-loader', 'less-loader'],
  sassOptions: {
    includePaths: [path.join(__dirname, './src/app')],
  },
};

module.exports = nextConfig;
