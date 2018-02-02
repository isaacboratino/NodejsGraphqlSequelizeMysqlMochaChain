const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const PerfilType = new GraphQLObjectType({
  name: 'Perfil',
  description: 'Representação do Perfil',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (perfil) => perfil.id,
    },
    razaoSocial: {
      type: GraphQLString,
      resolve: (perfil) => perfil.razaoSocial,
    },
    CNPJ: {
      type: GraphQLString,
      resolve: (perfil) => perfil.CNPJ,
    }, 
    nomeFantasia: {
      type: GraphQLString,
      resolve: (perfil) => perfil.nomeFantasia,
    }, 
    inscricaoEstadual: {
      type: GraphQLString,
      resolve: (perfil) => perfil.inscricaoEstadual,
    }, 
    nomeResponsavel: {
      type: GraphQLString,
      resolve: (perfil) => perfil.nomeResponsavel,
    }, 
    email: {
      type: GraphQLString,
      resolve: (perfil) => perfil.email,
    }, 
    telefone: {
      type: GraphQLString,
      resolve: (perfil) => perfil.telefone,
    }, 
    celular: {
      type: GraphQLString,
      resolve: (perfil) => perfil.celular,
    }, 
    endereco: {
      type: GraphQLString,
      resolve: (perfil) => perfil.endereco,
    }, 
    numero: {
      type: GraphQLString,
      resolve: (perfil) => perfil.numero,
    }, 
    bairro: {
      type: GraphQLString,
      resolve: (perfil) => perfil.bairro,
    },
    cidade: {
      type: GraphQLString,
      resolve: (perfil) => perfil.cidade,
    },    
    createdAt: {
      type: GraphQLString,
      resolve: (perfil) => perfil.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (perfil) => perfil.updatedAt,
    },
  }),
});

module.exports = PerfilType;
