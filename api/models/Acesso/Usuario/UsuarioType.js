const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const UsuarioType = new GraphQLObjectType({
  name: 'Usuario',
  description: 'Definicao graphql Usuario',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (usuario) => usuario.id,
    },
    usuario: {
      type: GraphQLString,
      resolve: (usuario) => usuario.usuario,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (usuario) => usuario.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (usuario) => usuario.updatedAt,
    },
  }),
});

module.exports = UsuarioType;
