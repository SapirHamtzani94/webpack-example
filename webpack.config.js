const path  = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(png|jpe?g|gif)$/i,
    //             use: [
    //                 {
    //                     loader: 'file-loader',
    //                     options: {
    //                         name: '[name].[ext]',
    //                         outputPath: 'images/'
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 20000,
    //         minRemainingSize: 0,
    //         minChunks: 1,
    //         maxAsyncRequests: 30,
    //         maxInitialRequests: 30,
    //         enforceSizeThreshold: 50000,
    //          // cacheGroups: {
    //          //    defaultVendors: {
    //          //        test: /[\\/]node_modules[\\/]/,
    //          //        priority: -10,
    //          //        reuseExistingChunk: true,
    //          //    },
    //             // default: {
    //             //     minChunks: 2,
    //             //     priority: -20,
    //             //     reuseExistingChunk: true,
    //             // },
    //             // groupEF:{
    //             //     test: (file, { chunkGraph }) => {
    //             //         const moduleChunks = chunkGraph.getModuleChunks(file);
    //             //         const moduleChunksNames = moduleChunks.map(item => item.name);
    //             //         console.log('groupEF', file.resource.replace('/Users/sapirh/Desktop/store_projects/webpack-exampels/', ''), moduleChunksNames)
    //             //         return chunkGraph.getModuleChunks(file).some(({name}) => ['moduleC'].includes(name))
    //             //     },
    //             //     minChunks: 2,
    //             //     name:'groupEF',
    //             // },
    //         //}
    //    }
    // }
}






