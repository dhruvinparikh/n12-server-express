module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    'Permissions',
    {
      permissionId: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: { type: DataTypes.STRING }
    },
    {
      underscored: true
    }
  );
  Permission.associate = models => {
    const { Roles, PermissionRoles } = models;
    Permission.belongsToMany(Roles, {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      otherKey: 'roleId',
      foreignKey: 'permissionId',
      through: PermissionRoles
    });
  };
  return Permission;
};
