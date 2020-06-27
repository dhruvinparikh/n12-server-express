var express = require('express');
require('dotenv').config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.connectionString);

sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})
  .catch(function (error) {
    console.error('Unable to connect to the database:', error);
  });


var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// TODO; Create a folder / file out of this schema 
// Construct a schema
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello World';
  },
}

var app = express();


// TODO: Remove `graphiql: true` from the production server
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000);
console.log(process.env.applicationName + ' is running a graphql server at http://localhost:4000/graphql');