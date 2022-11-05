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


io.sockets.on('connection', function(socket) {
    console.log("We have a new client: " + socket.id);
    
    socket.on('data', (data)=>{
        console.log(data);
        db.insert(data);

        io.sockets.emit('sdata',data);
    })

    //Listen for this client to disconnect
    socket.on('disconnect', function() {
        console.log("A client has disconnected: " + socket.id);
    });
    
});