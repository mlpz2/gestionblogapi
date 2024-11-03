const express = require('express');



const server = express();



const rutasAutores = require('./routes/autores.routes');

server.use('/api/autores', rutasAutores)



const rutasPosts = require('./routes/posts.routes');

server.use('/api/posts', rutasPosts)



server.listen(3000, () => console.log('Server running'));