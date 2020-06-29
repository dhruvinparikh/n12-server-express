module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    'UserRoles',
    {
      userId: {
        type: DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'user_id'
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
  return UserRole;
};
