const path = require('path');

module.exports = {
    entry: 'app.js',
    output: {
        path: path.resolve(__dirname, './bundle'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8008
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]

            },
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    }
}