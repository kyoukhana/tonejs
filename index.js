const Bundler = require('parcel-bundler');
const path = require('path');

['index'].forEach(async function (fileName) {
    const entryFiles = path.join(__dirname, 'src', 'app', `${fileName}.js`);

    const options = {
        outDir: './dist/',
        outFile: `${fileName}.js`,
        watch: true,
        minify: false,
        sourceMaps: false,
        scopeHoist: true
    };
    // Initializes a bundler using the entrypoint location and options provided
    const bundler = new Bundler(entryFiles, options);

    // Run the bundler, this returns the main bundle
    // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
   await bundler.bundle();
});
