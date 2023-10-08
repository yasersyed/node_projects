const { MongoClient } = require('mongodb');

var url = 'mongodb://127.0.0.1:27017';
console.log(url);
const client = new MongoClient(url);

// client.connect(url, function(err, db) {
//     if(err) throw err;
//     console.log("Database created!");
//     db.close();
// });

client.connect(url, function(err, db) {
    if(err) throw err;

    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
        if(err) throw err;
        console.log("Collection created!");
        db.close();
    });
    console.log("Database created!");
    db.close();
});
