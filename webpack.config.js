import webpack from 'webpack'

const path = require('path');

var gumezawalocale = {
    "lat": "",
    "lng": "",
    "alt": ""
};
export default {
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],

    // //ビルドするファイル
    // entry: path.resolve(__dirname, './src/main.js'),
    // //ビルドしたファイルの出力先
    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: 'bundle.js',
    //     publicPath: '/assets'
    // },
    //開発サーバーの設定
    devServer: {
        contentBase: path.resolve(path.join(__dirname, 'public')),
        // before: function (app) {
        //     var umezawalocate = gumezawalocale ;
        //     var bodyParser = require('body-parser');   
        //     app.get('/gps/data', function (req, res) {
        //         res.json(umezawalocate);
        //         console.log("get called ");
        //     });
        //     app.post('/gps/data', bodyParser.json(),function (req, res) {
        //         umezawalocate = req.body;
        //         console.log("post called ");
        //         console.log(req.body);
        //         console.log(umezawalocate);
        //         res.send("GET res sent from webpack dev server")
        //     });
        //     app.get('/post/data', function (req, res) {
        //         umezawalocate = req.body;
        //         console.log("get/post called ");
        //         console.log(umezawalocate);
        //         res.send("post sent from webpack dev server")
        //     });

    },
    node: {
        fs: "empty",
        net: 'empty',
        tls: 'empty'
    },
    devtool: 'source-map',

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
};