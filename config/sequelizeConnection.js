const Sequelize = require('sequelize');

const sequelizeConnection = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER, 
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });

module.exports = sequelizeConnection;

/*
  Preload and initialize all models after sequelize connection is established
*/
require('../models');