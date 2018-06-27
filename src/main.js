import defaultExport from 'express';

import path from "path";
//couchDB用ライブラリを使用できるように
import couchdb from "node-couchdb";
import sys from "sys";

var SERVER_PORT = 9000;
var DB_PORT = 5984;


var app = express();
var client = new CouchDBClient({
    host: '127.0.0.1', //The host to connect to
    port: '5984' //The port
});
client.welcome(function (err, data) {
    console.log(err || data); //Hope it is not an error!
});

app.get("/konkatsugo", function (req, res) {


    if (docName != undefined && author != undefined) {
        //DBに登録
        db.saveDoc(
            {
                docName: docName,
                author: author
            },
            function (er, ok) {
                if (er) throw new Error(JSON.stringify(er));
                sys.puts('Saved my doc to the couch!');
            });
    }

    var docList;

    //登録されているデータを全件取得する
    db.allDocs(
        { include_docs: true },
        function (er, resp) {
            docList = resp.rows;
            res.render('couchsample', {
                locals: {
                    docList: docList
                }
            });
        }
    );

    res.end("hogehoge main");
});

var server = app.listen(8080, function () {
    console.log('Listening on port %d', server.address().port);
});
