const Express = require('Express');
const App = Express();
const port = 80;


const MonogDB = require('');
const mongoDBClient = MongoDB.MongoClient;
const URL = "mongodb+srv://jamessullivan:NXa6AwWqCvtcsxsq@cluster0-tc9sb.mongodb.net/";


let collection = null;

MongoClient.connect(URL, (error, connection) => {
if(error){
    throw error;
}

connection.db("DIG4503-78");
collection = database.collection("Movies");

});

const CORS = require('cors');
App.use(CORS());


App.listen(port, () => {

App.get("movies/title/:title", (req,res) => {

    let result = {"error": "Could not find movies!"};

if(collection != null){
    collection.find({"title": `/${req.params.title}/`}).toArray()
    .limit(100)
    .toArray()
    .then((cursorArray) => {

        if(cursorArray.length != 0){
            result = cursorArray;
        }
      // Do something with the cursorArray data
      res.json(result);
    });;
}
else{
    res.json(result);
}

    

})


});