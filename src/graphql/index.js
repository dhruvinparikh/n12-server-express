const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const models = require('../db/models');
const dataloader = require('./dataloaders');

const server = new ApolloServer({
  cors: false, 
  typeDefs,
  resolvers,
  context: { models, dataloader },
})
// server.applyMiddleware()

module.exports = server; 

