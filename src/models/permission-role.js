module.exports = (sequelize, DataTypes) => {
  const PermissionRole = sequelize.define(
    'PermissionRoles',
    {
      permissionId: {
        type: DataTypes.UUID,
        references: {
          model: 'permissions',
          key: 'permission_id'
        }
      },
      roleId: {
        type: DataTypes.UUID,
        references: {
          model: 'Roles',
          key: 'role_id'
        }
      }
    },
    {
      underscored: true
    }
  );
  return PermissionRole;
};
