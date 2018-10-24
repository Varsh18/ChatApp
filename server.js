var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
users=[];
connections=[];

// run the server at the port 3000
server.listen (process.env.PORT||3000);

console.log('server running');

app.get('/',function(req,res){
 res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected',connections.length);


});
