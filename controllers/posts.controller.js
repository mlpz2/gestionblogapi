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