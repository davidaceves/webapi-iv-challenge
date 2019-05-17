const express = require('express');
const server = express();

const UserRouter = require('./users/userRouter.js');
const PostRouter = require('./posts/postRouter.js')

server.use(express.json());
server.use(logger);

server.use('/api/users', UserRouter);
server.use('/api/posts', PostRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}`
  );
  next();
};

module.exports = server;
