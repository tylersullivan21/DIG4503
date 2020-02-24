const MongoClient = require("mongodb").MongoClient;

const URl = "mongodb+srv://<jamessullivan>:<NXa6AwWqCvtcsxsq>@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(error, connection) {




if (error){
    throw error;
}

let database = connection.db("DIG4503-78");
let collection = database.collection("Movies");

console.log(collection);

collection.findOne({
    "score": 79
}, {}, (error, result) => {
console.log(result)
});

console.log(result);


connection.close();


} );