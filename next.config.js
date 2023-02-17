/** @type {import('next').NextConfig} */

const path = require('path');

const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

module.exports = withImages({
  exclude: path.resolve(__dirname, 'src/images/*'),
  webpack(config, options) {
    return config;
  },
});

module.exports = withOptimizedImages();

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
