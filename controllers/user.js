const { response } = require('express');





const usuariosGet = (req, res = response) => {
    const {q, nombre, apiKey} = req.query;
    res.json({
        msg: 'get Api - Controlador',
        q,
        nombre,
        apiKey
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'Put Api - Controlador',
        id
    });
}


const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'Post Api - Controlador',
        body
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete Api - Controlador',
    });
}
const usuariosPach = (req, res = response) => {
    res.json({
        msg: 'Pach Api - Controlador',
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPach,
}