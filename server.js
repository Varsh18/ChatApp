var express=require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
users=[];
connections=[];

// run the server at the port 3000
server.listen (process.env.PORT||3000);
