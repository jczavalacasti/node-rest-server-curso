const jwt = require('jsonwebtoken');

// =========================
// Verificar token
// =========================
let verificaToken = (req, res, next) => {

    let token = req.get('token'); // Get Headers by name

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        // Decoded = all payload from req
        req.usuario = decoded.usuario;
        next();

    });

};


// =========================
// Verificar admin role
// =========================
let verificaAdmin_Role = ((req, res, next) => {

    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }

});

module.exports = {
    verificaToken,
    verificaAdmin_Role
}