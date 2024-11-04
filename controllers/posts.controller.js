const db = require('../sql/db.js');

exports.getPosts = (request, response) => {
    const sql = 'select * from posts';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    })
};

exports.createPost = (request, response) => {
    let sql = 'insert into posts(titulo, descripcion, fecha_de_creacion, categoria, autores_id) ';
    sql = sql + 'values(\'' + request.body.titulo + '\', \'' + request.body.descripcion + '\', \'' 
    + request.body.fecha_de_creacion + '\', \'' + request.body.categoria + '\', \'' + request.body.autores_id + '\')';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    })
};

exports.deletePost = (request, response) => {
    let sql = 'delete from posts where id = ' + request.query.id;
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    })
};
