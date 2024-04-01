for configure the webpack,

1. create one folder name project1
2. inside the project1 folder create two more folder name dist & src.
3. inside the src folder create one file name index.js
4. indise the dist folder create two file one is index.html and one is output.js
5. make sure in the index.html include the output.js file (<script src="output.js"></script>)
6. create webpack.config.js file in your root directory
 
   3. default structure of webpack.config.js
   
   const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};


********* follow the belowe command step by step ************

1. npm init -y
2. npm install webpack webpack-cli css-loader style-loader --save-dev
3. npm install -g webpack-dev-server
4. npm install webpack-dev-server --save-dev
5. npm install -g webpack-cli
6. npm install webpack-cli --save-dev


#### webpack.config.js structure of my project ####

const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "output.js"
    },

    // loader 

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
        ]
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3500
    }
}




