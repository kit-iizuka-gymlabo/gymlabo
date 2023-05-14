const withTM = require("next-transpile-modules")([
  "recast-navigation",
  "@recast-navigation/three",
  "@recast-navigation/core",
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  // any other next.js settings here
});