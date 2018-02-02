const Sequelize = require('sequelize');

const sequelize = require('../../../../config/database');

//const Usuario = require('../../../Acesso/Usuario/Usuario');

/*const hooks = {
  beforeCreate(perfil) {
    perfil.CNPJ = perfil.CNPJ.replace('[/\\,/-,/.]','');
    perfil.inscricaoEstadual = perfil.inscricaoEstadual.replace('[/\\,/-,/.]','');
  },
};*/

const instanceMethods = {
  toJSON() {
    const values = Object.assign({}, this.get());
    return values;
  },
};

const tableName = 'clinica_perfis';

const Perfil = sequelize.define('Perfil', {
  razaoSocial: {
    type: Sequelize.STRING(200),
    unique: true,
  },
  CNPJ: {
    type: Sequelize.STRING(14),
    unique: true,
  },
  nomeFantasia: {
    type: Sequelize.STRING(200),
    unique: true,
  },
  inscricaoEstadual: {
    type: Sequelize.STRING(14),
    unique: true,
  },
  nomeResponsavel: {
    type: Sequelize.STRING(200),
  },
  email: {
    type: Sequelize.STRING(200),
  },
  telefone: {
    type: Sequelize.STRING(14),
  },
  celular: {
    type: Sequelize.STRING(14),
  },
  endereco: {
    type: Sequelize.STRING(300),
  },
  numero: {
    type: Sequelize.STRING(30),
  },
  bairro: {
    type: Sequelize.STRING(120),
  },
  cidade: {
    type: Sequelize.STRING(120),
  },
}, { instanceMethods, tableName });

//Profile.belongsTo(User);

module.exports = Perfil;