const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mf2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
         name: "mf2",
         filename: "remoteEntry.js",
         exposes: {
          './Module': './projects/mf2/src/app/contact/contact.module.ts',
         },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "shell@http://localhost:5000/remoteEntry.js",
        //     "mf1": "mf1@http://localhost:3000/remoteEntry.js",
        //     "contact": "contact@http://localhost:4200/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
