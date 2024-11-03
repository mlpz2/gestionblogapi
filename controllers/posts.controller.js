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




exports.createPosts = (request, response) => {


	//const sql = 'select * from posts'; (AQUI SUSTITUIR SELECT * FROM POST POR INSERT INTO)

	//db.query(sql, (error, resultado) => {

		//if (error) {

			//throw error;

		//} else {

			response.json(request.body);

		//}

	//})

};