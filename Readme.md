## __1. RECOPILACIÓN SIMPLIFICADA DE LOS PASOS DE ESTE PROYECTO__ 

Esta es la recopilación general o simplificada de pasos en base al enunciado de la actividad número 8 llamada "Blog-API":

1. Creación correcta de las diferentes tablas con todos los campos.

2. Creación del proyecto Express de NodeJS.

3. Creación de las rutas necesarias para establecer la base del API.

4. Creación de URLs necesarias para la recuperación y creación de nuevos Autores dentro de la base de datos.

5. Creación de las URLs para la recuperación y creación de nuevos Posts dentro de la base de datos.

6. Creación de la ruta que nos permita recuperar todos los Posts de un Autor en concreto a partir de la recuperación de dicho Autor de la URL.


## __2. DESCRIPCIÓN DEL PROYECTO__ (explicado sin código para que lo comprendan aquellos lectores que no saben programación):

* Este proyecto tiene como objetivo crear un sistema básico de base de datos y una aplicación web que permita gestionar Autores y publicaciones (o "Posts") de un `Blog`.
  
*  Está diseñado para facilitar la creación, consulta, actualización y eliminación de Autores y Posts en una base de datos, a través de una serie de pasos detallados que se explican a continuación.

## __3. PASOS REALIZADOS__ (explicados sin código):

__1. Creación de la Base de Datos y Tablas__

Primero, se ha creado un esquema (estructura general) de base de datos llamado __`actividad_blog`__, donde se definieron dos tablas principales:

* __Autores__: para almacenar información sobre los Autores de los Posts, como su nombre, imagen y correo electrónico.
* __Posts__: para almacenar la información de las publicaciones, incluyendo el título, descripción, fecha de creación, categoría y el Autor al que pertenecen.

En la carpeta __`doc`__ del proyecto se incluyen archivos que documentan este proceso:

* __`model_actividad_blog.mwb`__: Contiene una representación visual de la base de datos.
* __`script-create-actividad_blog.sql`__: Un archivo que define la estructura de la base de datos y crea las tablas.
* __`script-insert-actividad_blog.sql`__: Un archivo que contiene datos de ejemplo para poblar la base de datos y probar su funcionamiento.

__2. Creación del Proyecto Web__

Para permitir la comunicación entre la aplicación web y la base de datos, se ha creado un proyecto en la plataforma Express. 

Express es un sistema o framework que permite crear aplicaciones web y conexiones a bases de datos de manera sencilla.

Las configuraciones y herramientas básicas que se añadieron incluyen:

* __`Express`__: Facilita la creación de la estructura del proyecto web.
* __`MySQL`__: Permite la conexión entre la aplicación y la base de datos.

__3. Configuración de las Rutas del Proyecto__

Se han creado las rutas (o caminos) principales en la aplicación para organizar cómo acceder a la información de Autores y Posts en la base de datos. 

Estas rutas actúan como "puertas" de acceso, permitiendo que se envíen solicitudes desde la aplicación web a la base de datos para crear, leer, actualizar o eliminar Autores y Posts.

Las rutas configuradas son:

* __`/api/autores`__: Para manejar los datos de los Autores.
* __`/api/posts`__: Para manejar los datos de las Publicaciones o Posts.

__4. Funciones para Administrar Autores__

Para gestionar los Autores en la base de datos, se crearon funcionalidades específicas con las siguientes `rutas`:

* __Recuperación de Autores__: Permite obtener una lista de todos los Autores registrados en la base de datos.
  * __Ruta: `GET` `/api/autores`__ 
* __Creación de Autores__: Permite agregar un nuevo Autor a la base de datos proporcionando detalles como nombre, imagen y correo electrónico.
  * __Ruta: `POST` `/api/autores/create`__

__5. Funciones para Administrar Publicaciones o Posts__

Similar a los Autores, se han creado funciones para gestionar los Posts con las siguientes `rutas`:

* __Recuperación de Publicaciones o Posts__: Permite obtener una lista de todos los Posts registrados en la base de datos.
  * __Ruta: `GET` `/api/posts`__
* __Creación de Publicaciones__: Permite agregar una nueva publicación o Posts, indicando detalles como título, descripción, fecha de creación, categoría y el Autor correspondiente.
  * __Ruta: POST `/api/posts/create`__

__6. Búsqueda de Publicaciones o Posts de un Autor Específico__

Además de los pasos anteriores, se añadió la opción de buscar publicaciones o Posts de un Autor en específico.

Esto permite obtener todos los Posts de un Autor determinado utilizando su identificación o correo electrónico.

Las rutas específicas para estas operaciones son las siguientes:

* __Recuperar Posts de un Autor específico por ID__:
Devuelve todos los Posts asociados a un Autor, identificado por su ID.
  * __Ruta: `GET` `/api/posts/getPostFromAuthorId?id=<autor_id>`__
* __Buscar Posts por nombre o correo exacto del Autor__:
Permite encontrar publicaciones de Autores que tengan un nombre o correo específico.
  * __Ruta: `GET` `/api/posts/getPostFromAuthorNameOrEmailEqual?filter=<nombre_o_correo>`__
* __Buscar Posts por coincidencia parcial en nombre o correo del Autor__:
Permite buscar publicaciones o Posts de Autores cuyo nombre o correo coincida parcialmente con un término dado.
  * __Ruta: `GET` `/api/posts/getPostFromAuthorNameOrEmailLike?filter=<nombre_o_correo_parcial>`__
  
__7. Funciones añadidas extra que he añadido para completar la actividad, aunque no están solicitadas en el enunciado__

Finalmente, se añadieron algunas funciones adicionales para una administración más completa:

* __Eliminar Autores y Posts__:
Permite borrar Autores o Posts específicos.
  * __Ruta para eliminar un Autor: `DELETE` `/api/autores/<autor_id>`__
  * __Ruta para eliminar un Post: `DELETE` `/api/posts/<post_id>`__
* __Modificar información__:
Se añadió la opción de actualizar la información de Autores y Posts existentes en la base de datos.
  * __Ruta para actualizar un Autor completo: `PUT` `/api/autores/<autor_id>`__
  * __Ruta para actualizar parcialmente un Post: `PATCH` `/api/posts/<post_id>`__

Este sistema permite gestionar los datos de Autores y publicaciones o Posts de una manera estructurada y eficiente, facilitando su uso para un `blog` o cualquier otro tipo de sitio web que requiera manejar los contenidos de sus publicaciones o Posts y de sus Autores.




## __4. RESOLUCIÓN DE LA ACTIVIDAD (explicado con código para programadores)__

__1.__ En primer lugar, se ha __creado en MySQL Workbench__ el esquema __`actividad_blog`__ con las __tablas Posts y Autores__.

* Puede observarse __más documentación__ de este apartado en la carpeta __`doc`__ en los siguientes ficheros:

    * __`model_actividad_blog.mwb`__: Es la copia del fichero `mwb` del diagrama de la base de datos MySQL Workbench.
    * __`script-create-actividad_blog.sql`__: Es el script de creación de esquemas y tablas de la mencionada base de datos.
    * __`script-insert-actividad_blog.sql`__: Es el script de inserción de datos o registros de prueba en la mencionada base de datos, con el fin de comprobar su correcto funcionamiento.

__2. En segundo lugar, se ha creado el proyecto `express`__

* Se ha generado el proyecto `NodeJS` con el comando `npm init`

* Se han agregado las siguientes __dependencias__:

  * __`express`__:`npm install express`
  * __`mysql`__:`npm install mysql2`

* Se ha creado el fichero __`app.js`__ con el siguiente código:

        ``` Javascript
        const express = require('express');
        const server = express();
        server.listen(3000, () => console.log('Server running'));
        ```
* Se ha generado el fichero `sql/db.js` para __conectar__ el proyecto __`express`__ con la base de datos creada previamente:

        ``` Javascript
        const mysql = require('mysql2');

        const connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: '<usuario>',
            password: 'contraseña',
            database: 'actividad_blog'
        });

        connection.connect((error) => {
            if (error) {
                console.error('Error conectando a la base de datos: ', error);
                return;
            } else {
                console.log('Conectado OK');
            }
        });

        module.exports = connection;
        ```

__3. En tercer lugar, se han generado los ficheros de rutas dentro de `routes`:__

* `/api/autores` => `routes/autores.routes.js`

* `/api/posts` => `routes/posts.routes.js`
    ```Javascript
        const rutasAutores = require('./routes/autores.routes');
        server.use('/api/autores', rutasAutores)

        const rutasPosts = require('./routes/posts.routes');
        server.use('/api/posts', rutasPosts)
    ```

__4. Se han generado los elementos necesarios para la recuperación y generación de Autores:__

* Se ha generado el controller de Autores `/controllers/autores.controller.js`:
        ```Javascript
        const db = require('../sql/db.js');

        exports.getAutores = (request, response) => {
            const sql = 'select * from autores';
            db.query(sql, (error, resultado) => {
                if (error) {
                    throw error;
                } else {
                    response.json(resultado);
                }
            });
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
            });
        };
        ```

* Se han creado las rutas en los `routes` correspondientes de Autor (se necesitan Autores primero para crear Posts):

        ```Javascript
        router.get('/', autoresController.getAutores);
        router.post('/create', autoresController.createAutor);
        ```

__5. Se han generado los elementos necesarios para la recuperación y generación de Posts:__

* Se ha generado el controller de post `/controllers/posts.controller.js`:
        ```Javascript
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
        ```

* Se han creado las rutas en los `routes` correspondientes de Posts:
        ```Javascript
        router.get('/', postsController.getPosts);
        router.post('/create', postsController.createPost);
        ```

__6. Se han generado los elementos necesarios para recuperar Posts de un Autor concreto:__

* Se ha añadido al controller de Posts
        ```Javascript
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
        ```

* Se han generado las rutas para la búsqueda de Posts en `posts.routes.js`:
        ```Javascript

        router.get('/getPostFromAuthorId', postsController.getPostsFromAuthorId);

        router.get('/getPostFromAuthorNameOrEmailEqual', postsController.getPostsWhereNameOrEmailEqual);

        router.get('/getPostFromAuthorNameOrEmailLike', postsController.getPostsWhereNameOrEmailLike);

        ```

__7. Elementos extra:__

Se han añadido 3 métodos extra al proyecto, que son los métodos `DELETE`, `PUT` y `PATCH`.

La idea de añadir dichos métodos extra al proyecto viene porque __en el contexto de aplicaciones web y APIs, CRUD es el acrónimo que representa las 4 operaciones básicas para manipular datos en una base de datos o servicio__ y corresponde con las siguientes __4 operaciones CRUD__:

* `Create` (Significa `crear` y el método HTTP asociado es `POST`).
* `Read` (Significa `leer` y el método HTTP asociado es `GET`).
* `Update` (Significa `actualizar` y el método HTTP y tiene 2 métodos asociados, que son `PUT` para modificaciones completas del registro y `PATCH` para modificaciones parciales del registro o recurso).
* `Delete` (Significa `eliminar` y el método HTTP asociado es `DELETE`).

De modo que como el enunciado requería los métodos `POST` y `GET`, pensé que sería buena idea añadir también los métodos restantes, es decir: `DELETE`, `PUT` y `PATCH`, para practicar y para comprobar que funcionan todos ellos en este proyecto.

A continuación, se enumeran los 3 métodos extra añadidos al proyecto que no son requeridos por el enunciado:

* `DELETE` en Posts y Autores para la eliminación de los registros de las tablas Posts y Autores.

* `PUT` para la actualización o `update` de la tabla Autores.
    
* `PATCH` para la actualización parcial o `update` parcial de la tabla Posts (para comprobar que `PATCH` podía funcionar en la tabla Posts, del mismo modo que `PUT` podía funcionar en la tabla Autores).
