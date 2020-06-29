import passport from 'passport';
import { Users } from './models';
const config = require('./config/config');

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.CFG_SECRET
};
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const { username } = jwt_payload;
      const userInfo = await Users.findOne({ where: { username } });
      if (!userInfo || userInfo.username !== username) {
        done(null, false, { message: 'Unauthorized' });
      } else {
        delete userInfo.password;
        done(null, userInfo);
      }
    } catch (e) {
      return done(null, false, { message: e.message });
    }
  })
);

export default passport;
