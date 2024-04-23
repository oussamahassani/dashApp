import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import connect from './config/db.js'
import routes from './routes/index.js'
import Engine from "./middlewares/apareilingine.js";
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use(cors({ 
    credentials: true, 
    origin: true
   // origin: true, 
   // credentials: true,
 //   methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  //  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/", routes)

const port = process.env.PORT || 4000
 server.listen(port, ()=>{
    connect()
    console.log(`server is runing on port ${port}`)
})


var engine = new Engine({ agents: 24 }, io);
engine.init();
engine.run();
io.on("connection", (socket) => {
 console.log("connected to socket.io")

 socket.on('setup', (userData) => {
  console.log('ek')
  socket.join(userData._id)
  socket.emit("connected")
 })
 
})
