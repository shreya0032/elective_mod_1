var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8000
app.use("/public",express.static("public"));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
app.get('/bankim', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/bankim.html'));
});
app.get('/bibhuti', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/bibhuti.html'));
});
app.get('/chotogolpo', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/chotogolpo.html'));
});
app.get('/kishore', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/kishore.html'));
});
app.get('/month', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/month.html'));
});
app.get('/suchitra', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/suchitra.html'));
});
app.get('/sarat', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/sarat.html'));
});
app.get('/sunil', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/sunil.html'));
});
app.get('/narayan', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/narayan.html'));
});
app.get('/rohosyo', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/rohosyo.html'));
});
app.get('/samaresh', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/samaresh.html'));
});
app.get('/saptahik', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/saptahik.html'));
});
app.get('/sukumar', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/sukumar.html'));
});
app.get('/uponyash', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/uponyash.html'));
});
app.get('/yearly', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/yearly.html'));
});
app.get('/login-page', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/log_in.html'));
});
app.get('/sign-page', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/sign.html'));
});

const MongoClient  = require("mongodb").MongoClient;

// Connection URI
const uri =
  "mongodb://127.0.0.1:27017";
// Create a new MongoClient
const mongoClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  async function run() {
    try {
      // Connect the client to the server
      await mongoClient.connect();
  
      // Establish and verify connection
      await mongoClient.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await mongoClient.close();
    }
  }
  run().catch(console.dir);
  app.post('/sign-up', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var username = req.body.username;
    var address = req.body.address;
    
    var signUpDetails = {
        email: email, 
        password: password,
        username: username,
        address: address
    };
    mongoClient.connect().then(
        function(client){
            const db = client.db('golpo-khajana');
            const collection = db.collection('userCredentials');
            collection.insertOne(signUpDetails).then(
                function(result){
                    console.log(result);
                    res.sendFile(path.join(__dirname + '/view/index.html'));
                }
            );

        }
    );


  
    }); 

app.listen(8000);
