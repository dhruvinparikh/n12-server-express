import { Users, Roles, Permissions } from '../models';

export const getAll = async (req, res) => {
  const users = await Users.findAll({});
  const out = users.map(user => {
    return { userId: user.userId, username: user.username };
  });
  return res.status(200).json(out);
};

export const getUser = async (req, res) => {
  const user = await Users.findOne({
    where: { userId: req.user.userId },
    include: [
      {
        model: Roles,
        include: [
          {
            model: Permissions
          }
        ]
      }
    ]
  });
  const { Roles: roles } = user;
  const permissions = [];
  const rolesList = roles.map(role => {
    role.Permissions.map(p => {
      permissions.push(p.name);
    });
    return role.name;
  });
  const out = {
    username: user.username,
    Roles: rolesList,
    Permissions: permissions
  };
  return res.status(200).json(out);
};
