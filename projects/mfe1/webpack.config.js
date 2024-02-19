const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  filename: "remoteEntry.js",

  // * export the submicrofrontend module;
  // & RemoteModule;
  exposes: {
    './RemoteModule': './projects/mfe1/src/app/counter/counter.module.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
