const bcrypt = require('bcryptjs');
const DataLoader = require('dataloader');

const resolvers = {
  Query: {
      async user (root, { id }, { models }) {
            return models.User.findById(id)
      },
      async allDApps (root, args, { models }) {
            return models.DApps.findAll();
      },
      async dApps (root, { id }, { models }) {
            return models.DApps.findById(id)
      },
      async allNotifications (root, args, { models }) {
        return models.Notifications.findAll()
      },
      async notifcations (root, { id }, { models }) {
        return models.Notifications.findById(id)
      }      
    },

  Mutation: {
    async createUser (root, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10)
      })
    }
  },
  DApps: {
    Notifications : async (dapp ) =>  {
    
      console.log(`fetching dapp ${dapp.uuid}`)
      // batching of a single call 
      const result = notificationsLoader.load(dapp.uuid);
      notificationsLoader.clear(dapp.uuid);
      return result;
    }
  },
  Notifications: {
    DApps : async (notification) => {
      // return notification.getDApp();
      console.log(`fetching notification ${notification.dAppUuid}`);

      return models.DApps.findAll({
        where: { uuid: notification.dAppUuid }
      })
      const dappLoader = new DataLoader((dAppUuid) => {

        // find all posts by student ids in one query
        return models.DApps.findAll({
          where: { uuid: dAppUuid }
        })
      
          // order of returned array should match the order of studentIds
          .then(dapps => {
            const dappsById = dapps.reduce((value, dapp) => {
              if (!value[dapp.uuid]) value[dapp.uuid] = [];
              value[dapp.uuid].push(dapp);
              return value;
            }, {});
            return dAppUuid.map(id => {
              return dappsById[id];
            });
          });
      });  
      
      return dappLoader.load(notification.dAppUuid);
    }
  }
}

module.exports = resolvers