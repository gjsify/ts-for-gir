export default {
    mode: 'production',
    entry: ['./main.ts'],
    output: {
        filename: 'main.js',
    },
    target: 'es2020',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [/node_modules/],
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    experiments: {
        outputModule: true,
    },
    externalsType: 'module',
    // Ignore GJS imports
    externals: ({ context, request }, callback) => {
        if (/^gi:/.test(request)) {
          // Externalize to a commonjs module using the request path
          console.debug("externals", request);
          return callback(null, 'module ' +request);
        }
        callback();
    }
};
