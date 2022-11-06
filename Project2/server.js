let express = require("express");
let app = express();

let Datastore = require("nedb");
let db = new Datastore("course.db");
db.loadDatabase();

app.use('/', express.static('public'));



let http = require("http");
let server = http.createServer(app);

server.listen( 3000 , ()=> {
    console.log('listening');
});


let io = require("socket.io");
io = new io.Server(server);


app.get('/comments', (req,res)=>{
    
    let c = req.query.selectedCourse;

    db.find({courseName : c}).sort({ updateAt: 1 }).exec(function (err, docs) {
        if(err) {
            res.json({task: "task failed"})
        } else {
            let obj = {comments: docs};
            res.json(obj);
        }
      });

});


io.sockets.on('connection', function(socket) {
    console.log("We have a new client: " + socket.id);
    
    socket.on('data', (data)=>{

        console.log(data);
        db.insert(data, (err, newDoc)=>{
            //console.log(newDoc);
        });

        io.sockets.emit('sdata',data);
    })

    //Listen for this client to disconnect
    socket.on('disconnect', function() {
        console.log("A client has disconnected: " + socket.id);
    });

});