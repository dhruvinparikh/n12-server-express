module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      accessToken: { type: DataTypes.TEXT },
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING }
    },
    {
      underscored: true
    }
  );
  User.associate = models => {
    const { Roles, UserRoles } = models;
    User.belongsToMany(Roles, {
      otherKey: 'roleId',
      foreignKey: 'userId',
      through: UserRoles
    });
  };
  return User;
};
