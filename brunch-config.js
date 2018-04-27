// See http://brunch.io for documentation.
exports.files = {
    javascripts: {
        joinTo: {
            'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
            'app.js': /^app/
        }
    },
    stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
    babel: {
        "pattern": /\.(js|jsx)$/,
        "presets": ["es2015"],
        "plugins": [
            ["transform-react-jsx", {pragma: 'm'}]
        ]
    }
}
