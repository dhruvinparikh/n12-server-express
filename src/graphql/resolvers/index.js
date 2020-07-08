const bcrypt = require('bcryptjs');

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
    Notifications : async (dapp, args, {dataloader} ) =>  {    
      console.log(`fetching dapp ${dapp.uuid}`)
      const result = dataloader.notificationsLoader.load(dapp.uuid);
      // dataloader.notificationsLoader.clear(dapp.uuid);
      return result;
    }
  },
  Notifications: {
    DApps : async (notification, args, {models, dataloader}) => {
      console.log(`fetching notification ${notification.dAppUuid}`);
      const result = dataloader.dappsLoader.load(notification.dAppUuid);
      // dataloader.dappsLoader.clear(notification.dAppUuid);
      return result;
    }
  }
}

module.exports = resolvers