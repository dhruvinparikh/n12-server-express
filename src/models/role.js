module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Roles',
    {
      roleId: { type: DataTypes.UUID, primaryKey: true },
      name: { type: DataTypes.STRING }
    },
    {
      underscored: true
    }
  );
  Role.associate = models => {
    const { Users, Permissions, UserRoles, PermissionRoles } = models;
    Role.belongsToMany(Users, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      otherKey: 'userId',
      foreignKey: 'roleId',
      through: UserRoles
    });
    Role.belongsToMany(Permissions, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      otherKey: 'permissionId',
      foreignKey: 'roleId',
      through: PermissionRoles
    });
  };
  return Role;
};
