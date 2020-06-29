import { sign } from 'jsonwebtoken';
const config = require('../config/config');

export const login = async (req, res) => {
  const { user } = res;
  const token = sign({ username: user.username }, config.CFG_SECRET, {
    expiresIn: config.CFG_SESSION_TIMEOUT
  });
  return res.status(200).json({ token });
};
