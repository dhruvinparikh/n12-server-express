var express = require('express');
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
console.log('Running a graphql server at http://localhost:4000/graphql');