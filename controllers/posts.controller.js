const db = require('../sql/db.js');

exports.getPosts = (request, response) => {
    const sql = 'select * from posts';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};

exports.getPostsFromAuthorId = (request, response) => {
    const sql = 'select * from posts where autores_id = ' + request.query.id + ';';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};

exports.getPostsWhereNameOrEmailEqual = (request, response) => {
    const sql = 'select * from posts where autores_id in ' + '(select id from autores where nombre = \'' + request.query.filter + '\'' + ' or email = \'' + request.query.filter + '\');';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};

exports.getPostsWhereNameOrEmailLike = (request, response) => {
    const sql = 'select * from posts where autores_id in ' + '(select id from autores where nombre like \'%' + request.query.filter + '%\'' +  ' or email like \'%' + request.query.filter + '%\');';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};

exports.createPost = (request, response) => {
    let sql = 'insert into posts(titulo, descripcion, fecha_de_creacion, categoria, autores_id) ';
    sql = sql + 'values(\'' + request.body.titulo + '\', \'' + request.body.descripcion + '\', \'' 
    + request.body.fecha_creacion + '\', \'' + request.body.categoria + '\', ' + request.body.autores_id + ')';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};

exports.deletePost = (request, response) => {
    let sql = 'delete from posts where id = ' + request.query.id;
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};

exports.updatePost = (request, response) => {
    let sql = 'update posts set titulo = \'' + request.body.titulo + '\', descripcion = \'' + request.body.descripcion + '\', FECHA_DE_CREACION = \'' 
    + request.body.fecha_creacion + '\', categoria = \'' + request.body.categoria + '\', autores_id = ' + request.body.autores_id + ' where id = ' + request.body.id + ';';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    });
};
