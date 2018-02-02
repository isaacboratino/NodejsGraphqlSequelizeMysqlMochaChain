const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const UsuarioType = require('../../models/Acesso/Usuario/UsuarioType');
const Usuario = require('../../models/Acesso/Usuario/Usuario');

const updateUsuario = {
  type: UsuarioType,
  description: 'Essa mutation permite a alteração do usuario atraves do Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
    usuario: {
      name: 'usuario',
      type: GraphQLString,
    },
  },
  resolve: (Usuario, { id, usuario }) => (
    Usuario
      .findById(id)
      .then((foundUsuario) => {
        if (!foundUsuario) {
          return 'Usuario not found';
        }

        const thisUsuario = usuario !== undefined ? usuario : foundUsuario.usuario;
        const thisEmail = email !== undefined ? email : foundUsuario.email;

        return foundUsuario
          .update({
            usuario: thisUsuario,
            email: thisEmail,
          });
      })
  ),
};

const deleteUsuario = {
  type: UsuarioType,
  description: 'The mutation that allows you to delete a existing Usuario by Id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (Usuario, { id }) => (
    Usuario
      .delete()
      .where({
        id,
      })
  ),
};

module.exports = {
  updateUsuario,
  deleteUsuario,
};
