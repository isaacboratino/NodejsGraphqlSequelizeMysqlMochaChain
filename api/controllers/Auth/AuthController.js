const Usuario = require('../../models/Acesso/Usuario/Usuario');
const authService = require('../../services/auth.service');
const bcryptService = require('../../services/bcrypt.service');

const AuthController = () => {
  const register = (req, res) => {
    const body = req.body;


    if (body.password === body.password2) {
      return Usuario.create({
        usuario: body.usuario,
        password: body.password,
      })
        .then((usuario) => {
          const token = authService.issue({ id: usuario.id });

          return res.status(200).json({ token, usuario });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        });
    }

    return res.status(400).json({ msg: 'Passwords don\'t match' });
  };

  const login = (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;

    if (usuario && password) {
      Usuario.findOne({
        where: {
          usuario,
        },
      })
        .then((usuario) => {
          if (!usuario) {
            return res.status(400).json({ msg: 'Bad Request: User not found' });
          }

          if (bcryptService.comparePassword(password, usuario.password)) {
            const token = authService.issue({ id: usuario.id });

            return res.status(200).json({ token, usuario });
          }

          return res.status(401).json({ msg: 'Unauthorized' });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        });
    }
  };

  const validate = (req, res) => {
    const tokenToVerify = req.body.token;

    authService.verify(tokenToVerify, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  return {
    register,
    login,
    validate,
  };
};

module.exports = AuthController;
