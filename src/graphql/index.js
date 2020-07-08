const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const models = require('../db/models');
const dataloader = require('./dataloaders');
const { Op } = require("sequelize");

const server = new ApolloServer({
  cors: false, 
  typeDefs,
  resolvers,
  context: { models, Op, dataloader },
})
// server.applyMiddleware()

module.exports = server; 

