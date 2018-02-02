const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const Category = require('../../Acesso/Tipo/Tipo');
const UsuarioType = require('../../Acesso/UsuarioType/UsuarioType');
const Usuario = require('../../Acesso/UsuarioType/Usuario');

const TipoType = new GraphQLObjectType({
  name: 'Tipo',
  description: 'Definicao de Tipo',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (tipo) => tipo.id,
    },
    title: {
      type: GraphQLString,
      resolve: (tipo) => tipo.title,
    },
    description: {
      type: GraphQLString,
      resolve: (tipo) => tipo.description,
    },
    usuarios: {
      type: new GraphQLList(UsuarioType),
      resolve: (usuario) => (
        Usuario
          .findAll({
            where: {
              UsuarioId: usuario.id,
            },
          })
      ),
    },
    createdAt: {
      type: GraphQLString,
      resolve: (tipo) => tipo.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (tipo) => tipo.updatedAt,
    },
  }),
});

module.exports = TipoType;
