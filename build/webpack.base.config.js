const path = require('path');

module.exports = {
    entry:path.join(__dirname,'../src/index.js'),
    output:{
        path:path.join(__dirname,'../dist'),
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}