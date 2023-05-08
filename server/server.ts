const express = require("express");
const session = require("express-session");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(
  session({
    secret: "123test123",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

let activeSessions = 0;

io.on("connection", (socket) => {
  activeSessions++;
  io.sockets.emit("activeSessions", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.sockets.emit("activeSessions", activeSessions);
  });
});

app.get("/", (req, res) => {
  let count = req.session.count || 0;
  count++;
  req.session.count = count;
  res.send(`Active sessions: ${count}`);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
