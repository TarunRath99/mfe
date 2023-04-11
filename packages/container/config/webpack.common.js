module.exports = {
    module: {
        rules: [
            {
                //any file that ends with mjs or js needs to processed by babel
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //babel converts all kind of code es 16,17 etc and converts to
                        // es5 (processable by all browsers)
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        // additional features like await async
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}