const Sequelize = require('sequelize');
const bcryptSevice = require('../../../services/bcrypt.service');

const sequelize = require('../../../../config/database');

const Tipo = require('../../Acesso/Tipo/Tipo');
const Empresa = require('../../Clinica/Perfil/Perfil');

const hooks = {
  beforeCreate(usuario) {
    usuario.password = bcryptSevice.password(usuario); // eslint-disable-line no-param-reassign
  },
};

const instanceMethods = {
  toJSON() {
    const values = Object.assign({}, this.get());

    delete values.password;

    return values;
  },
};

const tableName = 'acesso_usuarios';

const Usuario = sequelize.define('Usuario', {
  usuario: {
    type: Sequelize.STRING(120),
    unique: true,
  },
  senha: {
    type: Sequelize.STRING(30),
  },
}, { hooks, instanceMethods, tableName });

Usuario.belongsTo(Tipo);
Usuario.belongsTo(Empresa);

module.exports = Usuario;
