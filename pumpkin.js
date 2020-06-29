const db = require('./dbConfig');
const Sequelize = require('sequelize');

//YOUR CODE GOES HERE

const Pumpkin = db.define('pumpkin', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  size: {
    type: Sequelize.ENUM,
    validate: {
      isIn: {
        args: ['small', 'medium', 'large']
      }
    }
  },
  evil: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  carved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  candle: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});
//--------------------
module.exports = Pumpkin;
