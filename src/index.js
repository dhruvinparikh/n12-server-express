const server = require("./graphql");

server
  .listen()
  .then(({ url }) => console.log('Server is running on localhost:4000'))