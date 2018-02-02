const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const UsuarioType = require('../../models/Acesso/Usuario/UsuarioType');
const Usuario = require('../../models/Acesso/Usuario/Usuario');

const usuarioQuery = {
  type: new GraphQLList(UsuarioType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    usuario: {
      name: 'usuario',
      type: GraphQLString,
    },    
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (usuario, args) => Usuario.findAll({ where: args }),
};

module.exports = usuarioQuery;
