const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Allow importing `global.css` on web.
config.resolver.sourceExts.push("css");

module.exports = config;

