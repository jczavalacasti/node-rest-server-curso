const express = require('express');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const _ = require('underscore');

const Usuario = require('../models/usuario');
const app = require('./usuario');

app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }

        if (!usuarioDB) {

            return res.status(400).json({
                ok: false,
                err: {
                    message: '(Usuario) o contraseña incorrecta'
                }
            });

        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o (contraseña) incorrecta'
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: 60 * 60 * 24 * 30 });

        res.json({
            ok: true,
            Usuario: usuarioDB,
            token
        });

    });
});


module.exports = app;