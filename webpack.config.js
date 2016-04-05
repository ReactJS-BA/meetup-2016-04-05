const path = require('path');

// A few constants we'll make use of
const MODE = process.env.npm_lifecyle_event;
const PATHS = {
    src: path.join(__dirname + '/src'),
    public: path.join(__dirname + '/public'),
};

// The "default" configuration, options that work for both
// the default build process as well as the development server
const config = {
    entry: ['babel-polyfill', path.join(PATHS.src, '/app.js')],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: PATHS.public,
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: PATHS.src,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }]
    }
};

// "start" is just the name of the script in our package.json for the
// development server. If it's anything except "start", we just return the
// common configuration.
if(MODE === 'start') {
    // We don't need or want to run hot-module-replacement code in
    // ordinary build processes, so we'll push it into the presets stack here.
    config.module.loaders[0].query.presets.push('react-hmre');

    // Configure our development server
    config.devServer = {
        contentBase: __dirname,
        hot: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT
    };
}

// Good to go!
module.exports = config;
