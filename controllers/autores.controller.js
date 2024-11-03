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
