## __1. OBJETIVOS REALIZADOS EN ESTE PROYECTO DE GESTIÓN DE AUTORES Y POST DE UN BLOG MEDIANTE UNA API RESTful:__

__1. __Crear correctamente la base de datos__ con las tablas necesarias y con todos los campos__:
  * Se crearon dos tablas llamadas __AUTORES__ y __POSTS__, con los campos necesarios cada una de ellas y una __relación__ 
  __`1→N`__ entre ambas tablas,
  * Relacionadas mediante una clave foránea o `foreign key` (`fk`) en la __tabla POSTS__ en el __campo__ `autores_id`.
  * La __tabla Autores__ contiene los __campos__: `nombre`, `imagen` y `email`.
  * Y la __tabla Posts__ contiene los __campos__ `título`, `descripción`, `fecha_de_creación`, `categoría` y `autores_id` (que se refiere al __Autor__ al que pertenece cada Post o publicación realizada en el `Blog`).

2.	Crear y __configurar__ el proyecto `Express` en `NodeJS`:
  * El proyecto se configuró con `Express`, y se añadieron las `dependencias` necesarias como `mysql2` para conectarse a la __base de datos__.

3.	Creación y __definición__ de las __rutas__ necesarias para establecer la base de la __API__.
  * Se definieron __rutas principales de la `API` en__:
    * `routes/autores.routes.js`
    * y `routes/posts.routes.js`
  * y dichas rutas se __configuraron__ en `app.js`.

4.	Creación e __implementación__ de las `URLs` necesarias __para la recuperación y creación de nuevos Autores__ en la __base de datos__.
  * __URLs__ implementadas:
    * `GET` `http://localhost:3000/api/autores`
    * `POST` `http://localhost:3000/api/autores/create`

5.	Creación e __implementación__ de las `URLs` para la __recuperación y creación de nuevos Posts__ dentro de la base de datos.
  * `URLs` implementadas:
    * `GET` `http://localhost:3000/api/posts`
    * `POST` `http://localhost:3000/api/posts/create`

6.	Creación e __implementación__ de la __ruta__ que nos permita __recuperar__ todos los __Posts__ escritos por un __Autor específico__.
  * `URLs` implementadas:
    * Para recuperar todos los __Posts__ de un __Autor__ desde la `id` del __Autor__: 
`GET` `http://localhost:3000/api/posts/getPostFromAuthorId?id=<autor_id>`
    * Para recuperar todos los __Posts__ de un __Autor__ utilizando el __filtro__ de búsqueda __`Equal`__ (que se __traduce igual__, que __requiere__ poner la __palabra exacta a buscar__ tal y como está almacenada en la base de datos): 
`GET` `http://localhost:3000/api/posts/getPostFromAuthorNameOrEmailEqual?filter=<nombre_o_correo>`
    * Para recuperar todos los __Posts__ de un __Autor__ utilizando el __filtro__ de búsqueda __`Like`__ (que se __traduce como__, que tiene la __ventaja de que no requiere poner la palabra exacta a buscar__): 
`GET` `http://localhost:3000/api/posts/getPostFromAuthorNameOrEmailLike`

## __2. DESCRIPCIÓN DEL PROYECTO__ (explicado sin código para que lo comprendan aquellos lectores que no saben programación):

* Este proyecto tiene como __objetivo crear un sistema básico de base de datos y una aplicación web__ para __gestionar Autores y Posts__ (o publicaciones) de un `Blog`.
  
* Incluye __funcionalidades__ para:
  * __Crear, leer, actualizar y eliminar Autores y Posts__.
  * __Consultar los Posts escritos por un Autor específico__.

El proyecto se basa en el __framework__ `Express` para __gestionar__ la __comunicación entre__ la __aplicación web y la base de datos__ `MySQL`.


## __3. PASOS REALIZADOS__ (explicados sin código):

__1. Creación de la Base de Datos y Tablas__

En primer lugar, se ha creado un esquema (estructura general) de base de datos llamado __`actividad_blog`__, en el que se definieron dos tablas principales:

* __Autores__: Contiene información de los Autores de las publicaciones o Posts del Blog, como su `nombre`, `imagen` y `email` (o correo electrónico).
* __Posts__: Contiene información de las publicaciones, incluyendo `título`, `descripción`, `fecha_de_creación`, `categoría` y `autores_id` (que es un campo de referencia al Autor correspondiente).

__Script SQL para la tabla `AUTORES`__

```
CREATE TABLE IF NOT EXISTS `AUTORES` (
    `ID` INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del autor',
    `NOMBRE` VARCHAR(255) NOT NULL COMMENT 'Nombre del autor',
    `IMAGEN` VARCHAR(255) NOT NULL COMMENT 'URL de la imagen del autor',
    `EMAIL` VARCHAR(255) NOT NULL COMMENT 'Email del autor',	
    PRIMARY KEY (`ID`),
    UNIQUE INDEX `ID_UNIQUE` (`ID` ASC)
);
```
__Script SQL para la tabla POSTS__

```
CREATE TABLE IF NOT EXISTS `POSTS` (
    `ID` INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del post',
    `TITULO` VARCHAR(255) NOT NULL COMMENT 'Título del post',
    `DESCRIPCION` VARCHAR(4000) NOT NULL COMMENT 'Descripción del post',
    `FECHA_DE_CREACION` DATE NOT NULL COMMENT 'Fecha de creación del post',
    `CATEGORIA` VARCHAR(255) NOT NULL COMMENT 'Categoría del post',
    `AUTORES_ID` INT NOT NULL,
    PRIMARY KEY (`ID`),
    UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
    INDEX `fk_POSTS_AUTORES_idx` (`AUTORES_ID` ASC),
    CONSTRAINT `fk_POSTS_AUTORES`
        FOREIGN KEY (`AUTORES_ID`)
        REFERENCES `AUTORES` (`ID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);
```


En la carpeta __`doc`__ del proyecto se incluyen archivos que documentan este proceso:

* __`actividad_blog_model.mwb`__: Contiene una representación visual de la base de datos.
* __`actividad_blog_script_create.sql`__: Es un archivo que define la estructura de la base de datos y crea las tablas mediante código SQL.
* __`actividad_blog_script_insert.sql`__: Es un archivo que contiene datos de ejemplo de Autores y publicaciones o Posts de dichos Autores, con el fin de poblar la base de datos y poder probar así su correcto funcionamiento.
* Además, esta carpeta contiene una __`serie de imágenes`__ que documentan las `vistas` tanto desde el `navegador` como desde un archivo llamado __`peticiones.rest`__ que simula el resultado de las vistas en el navegador en diversas fases del proyecto (es decir, desde que insertamos los datos en las tablas por primera vez, hasta que obtenemos el listado de datos insertados a partir de la búsqueda por el nombre de un autor o por su email).

__2. Creación del Proyecto Web__

Para permitir la comunicación entre la aplicación web y la base de datos, se ha creado un proyecto utilizando `Express`.

`Express` es un `framework` que permite crear aplicaciones web y gestionar conexiones a bases de datos de manera sencilla.

Las configuraciones y herramientas básicas incluyen:

* __`Express`__: Facilita la creación de la estructura del proyecto web.
* __`MySQL`__: Permite la conexión entre la aplicación y la base de datos.

__3. Configuración de las Rutas del Proyecto__

Se han creado las `rutas` (o caminos) principales en la aplicación para organizar cómo acceder a la información de __Autores__ y __Posts__ en la base de datos.

Estas rutas actúan como "puertas" de acceso, permitiendo que se envíen solicitudes desde la aplicación web a la base de datos __para crear, leer, actualizar o eliminar Autores y Posts__.

Las __rutas__ configuradas son:

* __`http://localhost:3000/api/autores`__: Para manejar los datos de los __Autores__.
* __`http://localhost:3000/api/posts`__: Para manejar los datos de las Publicaciones o __Posts__.

__4. Funciones para Administrar Autores__

Para gestionar los __Autores__ en la base de datos, se crearon las siguientes funciones:

* __Recuperación de Autores__: Permite obtener una lista de todos los __Autores__ registrados en la base de datos.
  * __Ruta: `GET` `/api/autores](http://localhost:3000/api/autores`__
* __Creación de Autores__: Permite agregar un nuevo __Autor__ a la base de datos proporcionando detalles como nombre, imagen y email.
  * __Ruta: `POST` `http://localhost:3000/api/autores /create`__

__5. Funciones para Administrar Publicaciones (o Posts)__

Similar a los Autores, se han creado funciones para gestionar los __Posts__ con las siguientes `rutas`:

* __Recuperación de Publicaciones o Posts__: Permite obtener una lista de todos los __Posts__ registrados en la base de datos.
  * __Ruta: `GET` `https://localhost:3000/api/posts`__
* __Creación de Publicaciones__: Permite agregar una nueva publicación o __Posts__, indicando detalles como título, descripción, fecha de creación, categoría y el Autor correspondiente.
  * __Ruta: POST `https://localhost:3000/api/posts/create`__

__6. Búsqueda de Publicaciones o Posts de un Autor Específico__

Además de los pasos anteriores, se añadió la opción de buscar publicaciones o __Posts de__ un __Autor específico__.

Esto permite obtener todos los Posts de un Autor determinado utilizando su identificación o correo electrónico.

Las rutas específicas para estas operaciones son las siguientes:

* __Recuperar Posts de un Autor específico por ID__:
Devuelve todos los __Posts__ __asociados__ a un __Autor__, identificado por su `ID`.
  * __Ruta: `GET` `https://localhost:3000/api/posts/getPostFromAuthorId?id=<autor_id>`__
* __Buscar Posts por nombre o correo exacto del Autor__:
Permite encontrar publicaciones o __Posts__ de Autores que tengan un __nombre o email__ específico.
  * __Ruta: `GET` `https://localhost:3000/api/posts/getPostFromAuthorNameOrEmailEqual?filter=<nombre_o_correo>`__
* __Buscar Posts por coincidencia parcial en nombre o email del Autor__:
Permite buscar publicaciones o __Posts__ de Autores cuyo __nombre o email__ coincida parcialmente con un término dado.
  * __Ruta: `GET` `https://localhost:3000/api/posts/getPostFromAuthorNameOrEmailLike?filter=<nombre_o_correo_parcial>`__
  
__7. Funciones extra añadidas para completar la actividad__

Finalmente, se añadieron algunas funciones adicionales para una administración más completa del `blog`:

* __Eliminar Autores y Posts__:
Permite __borrar__ Autores o Posts específicos.
  * __Ruta para eliminar un Autor: `DELETE` `https://localhost:3000/api/autores/<autor_id>`__
  * __Ruta para eliminar un Post: `DELETE` `https://localhost:3000/api/posts/<post_id>`__
* __Modificar información__:
Opción añadida para actualizar la información de Autores y Posts.
  * __Ruta para actualizar un Autor completo: `PUT` `https://localhost:3000/api/autores/<autor_id>`__
  * __Ruta para actualizar parcialmente un Post: `PATCH` `https://localhost:3000/api/posts/<post_id>`__

Este sistema permite gestionar los datos de __Autores__ y publicaciones o __Posts__ de una manera estructurada y eficiente, facilitando su uso para un `blog` o cualquier otro tipo de sitio web que requiera manejar los contenidos de sus publicaciones o Posts y de sus Autores.

## __4. RESOLUCIÓN DE LA ACTIVIDAD (explicado con código para programadores)__

__1. Creación en MySQL Workbench del esquema actividad_blog con las tablas Posts y Autores__

Cada una de las dos tablas creadas en la `base de datos` `actividad-blog` debe tener su `ID` único y sus `campos` o columnas que la contienen.

Una vez creadas las __dos tablas__ es necesario establecer la __relación__ entre ambas, que en este caso es __`1→N`__ a través del campo __`autores_id`__ de la __tabla Posts__, dado que:

* __Cada Autor (`1`)__ puede tener __muchas__ publicaciones o __Posts (`N`)__.
* Y __cada Post__ pertenece a __un único Autor__.

De modo que este es el código `SQL` de la `tabla Autores`:

```sql
CREATE TABLE IF NOT EXISTS `actividad_blog`.`AUTORES` (
  `ID` INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del autor en base de datos',
  `NOMBRE` VARCHAR(255) NOT NULL COMMENT 'Nombre del autor',
  `IMAGEN` VARCHAR(255) NOT NULL COMMENT 'URL de la imagen del autor',
  `EMAIL` VARCHAR(255) NOT NULL COMMENT 'Email del autor',
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE)
  ```

Y este es el código `SQL` de la `tabla Posts`:

```sql
CREATE TABLE IF NOT EXISTS `actividad_blog`.`POSTS` (
  `ID` INT NOT NULL AUTO_INCREMENT COMMENT 'Identificador del post en base de datos',
  `TITULO` VARCHAR(255) NOT NULL COMMENT 'Título del post',
  `DESCRIPCION` VARCHAR(4000) NOT NULL COMMENT 'Descripción del post (texto largo de hasta 4.000 caracteres al ser una descripción)',
  `FECHA_DE_CREACION` DATE NOT NULL COMMENT 'Fecha de creación del post',
  `CATEGORIA` VARCHAR(255) NOT NULL COMMENT 'Categoría del post',
  `AUTORES_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  INDEX `fk_POSTS_AUTORES_idx` (`AUTORES_ID` ASC) VISIBLE,
  CONSTRAINT `fk_POSTS_AUTORES`
    FOREIGN KEY (`AUTORES_ID`)
    REFERENCES `actividad_blog`.`AUTORES` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
```

__2. En la carpeta __`doc`__ se encuentra la `documentación` relacionada con este proyecto__:

__2.1. `Diagrama` y `scripts` de la base de datos__:

* __`actividad_blog_model.mwb`__: Diagrama visual de la base de datos creado en MySQL Workbench. Representa las tablas `AUTORES` y `POSTS`, junto con sus relaciones.
* __`actividad_blog_script_create.sql`__: Script SQL que crea las tablas de la base de datos (`AUTORES` y `POSTS`) y define su estructura.
* __`actividad_blog_script_insert.sql`__: Script SQL que inserta datos de prueba en ambas tablas, útil para verificar el funcionamiento del sistema.

__2.2. Capturas de pantalla de ejemplos del proyecto__:

* __`1_Vista del DIAGRAMA de la Base de Datos_Captura.PNG`__: Imagen del diagrama de la base de datos generado en MySQL Workbench.
* __`2_Vista de la Insercion de 6 registros en la tabla POSTS_WORKBENCH_Captura.PNG`__: Ejemplo del código para insertar datos en la tabla ´POSTS` y su visualización en Workbench.
* __`3_Vista de la Insercion de 6 registros en la tabla AUTORES_WORKBENCH_Captura.PNG`__:  Ejemplo del código para insertar datos en la tabla `AUTORES` y su visualización en Workbench.

__2.3. Pruebas de las rutas de la API (capturas desde navegador y peticiones REST)__:

* __`Imagen 1_Vista del listado de POSTS en el NAVEGADOR_PUERTO 3000_Captura.PNG`__: Es la imagen del navegador con el resultado del listado de Posts al acceder a la ruta `http://localhost:3000/api/posts/` usando el método `GET`.
* __`Imagen 2_Vista del listado de POSTS en el archivo PETICIONES_REST_PUERTO 3000_Captura.PNG`__: Es la imagen con el resultado similar al anterior, probado con el archivo `peticiones.rest`.
* __`Imagen 3_Vista del listado de AUTORES en el NAVEGADOR_PUERTO 3000_Captura.PNG`__:  : Es la imagen del navegador con el resultado al acceder a la ruta `http://localhost:3000/api/autores/` usando el método `GET`.
* __`Imagen 4_Vista del listado de AUTORES en el archivo_PETICIONES_REST_PUERTO 3000_Captura.PNG`__: Es la imagen con el resultado similar al anterior, probado con el archivo `peticiones.rest`.

__2.4. Pruebas de filtros y búsquedas avanzadas__:

* __`Imagen 5_Obtener Post del Autor a partir de id igual a 1_LaCasaDeLaArmonia_Federico Garcia Lorca_id 1_NAVEGADOR_Captura.PNG`__: 
  * Es la vista del navegador con el resultado que se observa al buscar los Posts de un Autor por su ID (`id=1`).
  *  Si este autor tuviera más de un Post, el resultado contendría todos los Posts correspondientes a este autor, pero sólo sale un Post porque sólo tiene uno. 
  * URL probada: `http://localhost:3000/api/posts/'getPostFromAuthorId?id=1`

* __`Imagen 6_Obtener Post del Autor a partir de id igual a 1_LaCasaDeLaArmonia_Federico Garcia Lorca_id 1_PETICIONES_REST_Captura.PNG`__: 
  * Es la imagen con el resultado similar al anterior, pero desde el archivo `peticiones.rest`.
  
* __`Imagen 7_Obtener Post del Autor a partir del Nombre o Email_EQUAL_Con Nombre igual a William Shakespeare__id 2_NAVEGADOR_Captura.PNG`__: 
  * Es la vista del navegador con el resultado que se observa al buscar Posts por nombre exacto (`filter=William Shakespeare`) usando el filtro `equal`.
  * URL probada: `http://localhost:3000/api/posts/getPostFromAuthorNameOrEmailEqual?filter=William%20Shakespeare`

* __`Imagen 8_Obtener Post del Autor a partir del Nombre o Email_EQUAL_Con Nombre igual a William Shakespeare__id 2_PETICIONES_REST_Captura.PNG`__: 
* Es la imagen con el resultado similar al anterior, pero desde el archivo `peticiones.rest`.
  
* __`Imagen 9_Obtener Post Completo del Autor a partir del Nombre o Email_Pero Con FILTRO_ LIKE_o COMO_En este caso Nombre igual a William Shakespeare_id 2_NAVEGADOR_Captura.PNG`__: 
  * Es la vista del navegador con el resultado que se observa al buscar Posts usando el filtro LIKE, lo que permite búsquedas parciales (filter=Shakespeare).
  * En el resultado sólo se observa un Post porque es el único que tiene, pero si tuviera más saldrían todos ls que tuviera este autor.
  * URL probada: `http://localhost:3000/api/posts/getPostFromAuthorNameOrEmailLike?filter=Shakespeare`

* __`Imagen 10_Obtener Post Completo del Autor a partir del Nombre oEmail_Pero Con FILTRO_ LIKE_o COMO_En este caso Nombre igual a William Shakespeare_id 2_PETICIONES_REST_Captura.PNG`__: 
* Es la imagen con el resultado similar al anterior, pero desde el archivo `peticiones.rest`.

__3. Configuración del archivo .gitattributes__:

Después de añadir varias imágenes y archivos a la carpeta `doc`, se configuró un archivo `.gitattributes` para gestionar el manejo de archivos en el repositorio. Este archivo proporciona las siguientes funcionalidades:

* __Normalización de finales de línea__: 
  * Asegura consistencia en los finales de línea entre diferentes sistemas operativos (Windows, macOS, Linux).
* __Tratamiento de archivos binarios__: Indica a Git que ciertos archivos son binarios y no deben ser tratados como texto. Esto es útil para evitar conflictos de fusión al trabajar en equipo.
* __Configuración de filtros personalizados__: Permite definir filtros personalizados para procesar archivos antes de que se añadan al repositorio o después de que se extraigan.
* __Compatibilidad con Git LFS (Large File Storage)__: Especifica qué archivos deben ser gestionados por Git LFS para manejar archivos grandes de manera eficiente.

Es decir, que `.gitattributes` ayuda a mantener la consistencia y el manejo adecuado de archivos en el repositorio, dado que garantiza un manejo eficiente y ordenado de los archivos, especialmente al trabajar con imágenes y scripts grandes. Esto mejora la colaboración y facilita la gestión del proyecto en GitHub.


__4.	Creación del proyecto proyecto `express`__

* Se ha generado el proyecto `NodeJS` con el comando `npm init`

* Se han agregado las dependencias instaladas__:

  * __`express`__:`npm install express`
  * __`mysql`__:`npm install mysql2`

Se ha añadido __nodemon__ como dependencia de desarrollo para facilitar el desarrollo:
```bash
npm install nodemon --save-dev
```

* __nodemon__ permite reiniciar automáticamente el servidor cada vez que se detectan cambios en los archivos, lo que mejora la eficiencia durante el desarrollo.

* Scripts añadidos al archivo `package.json`:
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

* Para iniciar el servidor en __producción__:
  ```bash
  npm start
  ```
- Para iniciar el servidor en __modo desarrollo__ con __nodemon__:
  ```bash
  npm run dev
  ```


* Se ha creado el fichero __`app.js`__ con el siguiente código:

    ```Javascript
        const express = require('express');
        const server = express();
        server.listen(3000, () => 
            console.log('Server running'));
    ```
* Y se ha generado el fichero `sql/db.js` para __conectar__ el proyecto __`express`__ con la base de datos creada previamente. 
*  Para entender un poco mejor la conexión entre la base de datos, se puede observar que:
   *  `mysql.createConnection` indica que se va a conectar la base de datos al proyecto `express`,
   *  `host` nos indica el host que se va a usar en la conexión, que en este caso es `localhost`,
   *  `port` (o puerto) nos indica el puerto que se va a usar, que en este caso es el `puerto 3306` (que es el que suele usarse en `MySQL`),
   *  y por último, el `usuario` y el `password` (o __contraseña__) que se usarán para conectarse, así como el nombre de la base de datos a la que te conectas `actividad_blog`:

    ```Javascript
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

__5. Configuración de rutas (en la carpeta `routes`):__

* `http://localhost:3000/api/autores` => `routes/autores.routes.js`

* `http://localhost:3000/api/posts` => `routes/posts.routes.js`
    ```Javascript
        const rutasAutores = require('./routes/autores.routes');
        server.use('/api/autores', rutasAutores)

        const rutasPosts = require('./routes/posts.routes');
        server.use('/api/posts', rutasPosts)
    ```

__6. Creación de los Controllers de Autores para la recuperación y generación de Autores:__

* Se crearon los controladores o `controller` de __Autores__
   `/controllers/autores.controller.js` y se definieron las rutas correspondientes para las operaciones CRUD:
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

* Se han creado las __rutas__ en los `routes` correspondientes de __Autor__ (se necesitan Autores primero para crear Posts):

    ```Javascript
        router.get('/', autoresController.getAutores);
        router.post('/create', autoresController.createAutor);
    ```

__7. Se han generado los elementos necesarios para la recuperación y generación de Posts:__

* Se crearon los controladores o `controller` de __Post__ `/controllers/posts.controller.js` y se definieron las __rutas__ correspondientes para las __operaciones__ `CRUD`:
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

__8. Se han generado los elementos necesarios para recuperar Posts de un Autor concreto:__

* Se ha añadido al __controller__ de __Posts__:
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

__9. Rutas de Búsqueda de Posts__:
    
```Javascript
        router.get('/getPostFromAuthorId', postsController.getPostsFromAuthorId);

        router.get('/getPostFromAuthorNameOrEmailEqual', postsController.getPostsWhereNameOrEmailEqual);

        router.get('/getPostFromAuthorNameOrEmailLike', postsController.getPostsWhereNameOrEmailLike);
```

__10. Elementos extra:__

Se añadieron los métodos `DELETE`, `PUT` y `PATCH`para realizar operaciones completas de `CRUD` y para practicar con el uso de `APIs` `RESTful`.

La idea de añadir dichos métodos extra al proyecto viene porque __en el contexto de aplicaciones web y `APIs`, `CRUD` es el acrónimo que representa las 4 operaciones básicas para manipular datos en una base de datos o servicio__ y corresponde con las siguientes __4 operaciones `CRUD`__:

* `Create` (Significa `crear` y el método `HTTP` asociado es `POST`).
* `Read` (Significa `leer` y el método `HTTP` asociado es `GET`).
* `Update` (Significa `actualizar` y el método `HTTP` tiene 2 métodos asociados, que son `PUT` para __modificaciones completas__ del registro y `PATCH` para __modificaciones parciales__ del registro o recurso).
* `Delete` (Significa `eliminar` y el método HTTP asociado es `DELETE`).

De este modo se ha comprobado que todos los métodos añadidos funcionan en este proyecto.

A continuación, se detallan los 3 métodos extra añadidos:

* `DELETE` en __Posts__ y __Autores__ para la __eliminación__ de los registros de las __tablas Posts__ y __Autores__.

* `PUT` para la __actualización__ o `update` de la __tabla Autores__.
    
* `PATCH` para la __actualización parcial__ o `update` parcial de la __tabla Posts__ (para comprobar que `PATCH` podía funcionar en la __tabla Posts__, del mismo modo que `PUT` podía funcionar en la __tabla Autores__).

### __5. POSIBLES PROPUESTAS DE MEJORA PARA EL FUTURO__

1. __Autenticación y autorización__:
    Implementar un sistema de autenticación con __`JWT` (`JSON Web Tokens`)__ para asegurar que solo usuarios autorizados puedan realizar ciertas operaciones.

2. __Relaciones avanzadas en la base de datos__:
   __Añadir más tablas__, como categorías o etiquetas, para permitir una gestión más rica de los Posts.
3. __Frontend integrado__:
    Crear una interfaz gráfica con un __framework__ como __`Angular`__ para consumir la __`API`__ y __mejorar la experiencia del usuario final__.

### __6. LO INTERESANTE DEL PROYECTO__

El desarrollo de este proyecto ha sido una __experiencia enriquecedora__.

Implementar un sistema completo para la __gestión__ de un `blog` con __Autores__ y __Posts__ me ha permitido explorar el poder de las `APIs` `RESTful` para estructurar y manejar datos de manera eficiente.

La integración de `Express` con `MySQL` ha reforzado mi comprensión de cómo __conectar aplicaciones web con bases de datos relacionales__ y realizar __consultas dinámicas__ según las __necesidades del usuario__.

### __7. LO QUE HE APRENDIDO__
1. Cómo __estructurar bases de datos relacionales__ usando __claves primarias o `primary key` (`pk`) y claves foráneas o `foreign key` (`fk`)__.
2. Cómo utilizar __`Express`__ para __crear rutas__ que __interactúen__ con __bases de datos__.
3. Cómo __implementar métodos__ `HTTP` como `GET`, `POST`, `DELETE`, `PUT` y `PATCH` en una `API` `RESTful`.
4. La importancia de __probar__ cada __ruta__ y __validar__ los __datos enviados por__ el __cliente__ para garantizar un __funcionamiento correcto__.
5. Cómo __configurar__ y __utilizar__ `nodemon` para __mejorar__ la __eficiencia__ en el __desarrollo__.
