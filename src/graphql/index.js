const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const models = require('../db/models');
const createLoader = require('./dataloaders');
const { Op } = require("sequelize");

const server = new ApolloServer({
  cors: true, 
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // create new loader instances for every request
    const dataloader = createLoader();
    return {
      models, Op, dataloader 
    }
  }
})
// server.applyMiddleware()

module.exports = server; 

