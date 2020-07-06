const graphql = require('graphql');
const Dapps = require('../models/dapp');
const Notifications = require('../models/notification');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
          

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = graphql;

const DappType = new GraphQLObjectType({
  name: 'Dapp',
  fields: () => ({
    uuid: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    logoUrl: { type: GraphQLString }
  })
});

const NotificationType = new GraphQLObjectType({
  name: 'Notification',
  fields: () => ({
    uuid: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    name: { type: GraphQLString },
    shortDesc: { type: GraphQLString },
    longDesc: { type: GraphQLString },
    dappUuid: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    search: {
      type: new GraphQLList(DappType),
      args: { q: { type: GraphQLString } },
      resolve(parents, args) {
        return Dapps.findAll({
          where: {
            description: {
              [Op.like]: '%' + args.q + '%'
            }
          }
        })
          .then(function (data) {
            return data;
          });
      }
    },
    dapps: {
      type: new GraphQLList(DappType),
      resolve() {
        return Dapps.findAll()
          .then(function (data) {
            return data;
          });
      }
    },
    notifications: {
      type: new GraphQLList(NotificationType),
      resolve() {
        return Notifications.findAll()
          .then(function (data) {
            return data;
          });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation: Mutation
});