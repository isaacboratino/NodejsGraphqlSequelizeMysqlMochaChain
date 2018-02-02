const Sequelize = require('sequelize');
const sequelize = require('../../../../config/database');

const instanceMethods = {
  toJSON() {
    const values = Object.assign({}, this.get());
    return values;
  },
};

const tableName = 'acesso_tipos';

const Tipo = sequelize.define('Tipo', {
  titulo: {
    type: Sequelize.STRING(80),
    unique: true,
  },
  descricao: {
    type: Sequelize.STRING(2000),
  },
}, { instanceMethods, tableName });

module.exports = Tipo;
