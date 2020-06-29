/* eslint-disable require-atomic-updates */
import { Users, Roles } from '../models';
import passport from '../passport';
import { ADMIN } from '../constants/role';
import { AUTH_STRATEGY } from '../constants/auth';

export const authenticate = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Bad Request');
  }
  const userInfo = await Users.findOne({ where: { username } });
  if (
    userInfo.username.toLowerCase() !== username.toLowerCase() ||
    userInfo.password !== password
  ) {
    return res.status(401).send('Unauthorized');
  }
  res.user = userInfo;
  return next();
};

export const isAuthenticated = async (req, res, next) => {
  passport.authenticate(AUTH_STRATEGY, (error, user, info) => {
    if (error) {
      return res.status(401).send(error);
    } else if (!user) {
      return res.status(401).send(info);
    }
    req.user = user;
    return next();
  })(req, res, next);
};

export const isAdmin = async (req, res, next) => {
  const {
    Roles: [roles]
  } = await Users.findOne({
    where: { userId: req.user.userId },
    include: {
      model: Roles
    }
  });
  const { name } = roles;
  if (name === ADMIN) {
    return next();
  }
  return res.status(401).send('Unauthorised');
};
