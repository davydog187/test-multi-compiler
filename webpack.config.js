const path = require("path");

const JS_RULES = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env']
        }
    }
};

console.info("context", path.resolve(__dirname, "src"));


module.exports = [{
    entry: "./a",
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "a.js"
    },
    module: {
        rules: [
            JS_RULES
        ]
    }
}, {
    entry: "./b",
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "b.js"
    },
    module: {
        rules: [
            JS_RULES
        ]
    }
} ]
