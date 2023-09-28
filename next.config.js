const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");

const config = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
};

module.exports = withPlugins([withCSS], config);
