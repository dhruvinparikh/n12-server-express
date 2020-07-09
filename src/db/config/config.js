const vars = {
    development: {
      DB_NAME: 'sfac_database_development',
      DB_HOST: 'localhost',
      DB_USER: 'postgres',
      DB_DIALECT: 'postgres',
      DB_PASSWORD: '',
      CORS_ORIGIN: '*'
    },
    test: {
      DB_NAME: 'testdb',
      DB_HOST: 'localhost',
      DB_USER: 'postgres',
      DB_DIALECT: 'postgres',
      DB_PASSWORD: 'password',
      CORS_ORIGIN: ['http://localhost:8080']
    },
    production: {
      DB_NAME: 'testdb',
      DB_HOST: 'host',
      DB_USER: 'username',
      DB_DIALECT: 'postgres',
      DB_PASSWORD: 'password',
      CORS_ORIGIN: ['https://unknown.com']
    }
  };

  // calculate effective variables
  const effVars =
    process.env.NODE_ENV === undefined
      ? vars.development
      : vars[process.env.NODE_ENV];
  
  const CFG_CORS_ORIGIN = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN
    : effVars.CORS_ORIGIN;
  
  const CFG_DB_NAME = process.env.DB_NAME ? process.env.DB_NAME : effVars.DB_NAME;
  
  const CFG_DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : effVars.DB_HOST;
  
  const CFG_DB_USER = process.env.DB_USER ? process.env.DB_USER : effVars.DB_USER;
  
  const CFG_DB_DIALECT = process.env.DB_DIALECT
    ? process.env.DB_DIALECT
    : effVars.DB_DIALECT;
  
  const CFG_DB_PASSWORD = process.env.DB_PASSWORD
    ? process.env.DB_PASSWORD
    : effVars.DB_PASSWORD;
  
  const CFG_SECRET = 'secretkey1';
  
  const CFG_SESSION_TIMEOUT = 30; //in minutes
  
  module.exports = {
    CFG_DB_NAME,
    CFG_DB_HOST,
    CFG_DB_DIALECT,
    CFG_DB_PASSWORD,
    CFG_DB_USER,
    CFG_SECRET,
    CFG_SESSION_TIMEOUT,
    CFG_CORS_ORIGIN
  };