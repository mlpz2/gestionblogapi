const db = require('../sql/db.js');

exports.getAutores = (request, response) => {
    const sql = 'select * from autores';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    })
};

exports.createAutor = (request, response) => {
    let sql = 'insert into autores(nombre, imagen, email) ';
    sql = sql + 'values(\'' + request.body.nombre + '\', \'' + request.body.imagen + '\', \'' 
    + request.body.email + '\')';
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    })
};

exports.deleteAutor = (request, response) => {
    let sql = 'delete from autores where id = ' + request.query.id;
    db.query(sql, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            response.json(resultado);
        }
    })
};
