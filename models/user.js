module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      userUuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
    },
    {
      underscored: true,
      paranoid: true,
      indexes: [
        {
          fields: ["user_uuid"],
        },
        {
          fields: ["username"],
        },
      ],
    }
  );
  return User;
};
