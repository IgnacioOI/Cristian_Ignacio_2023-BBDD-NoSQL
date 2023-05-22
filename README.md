# Cristian_Ignacio_2023-BBDD-NoSQL
# Proyecto práctico con MongoDB

1. **Diseño de la base de datos**
    1. Identificar entidades
    2. Modelo entidad relacion
    3. Modelo relacional
2. **Diseñar schema**
    1. Casos de uso
    2. Validación
    3. Vincular schema
4. **Crear docker-compose**
5. **Crear querys**
    1. Insertar varios documentos
    2. Fichero script con varioas ordenes
    3. Modificar documentos
    4. Eliminar documentos
6. **Atlas**
# Diseño de la base de datos
## Identificar entidades
Las entidades elegidas para una base de datos pelicula son:    
**Director** dirige una o varias **Peliculas**, **Actor** actua en una **Pelicula**, **Actor** interpreta uno o varios **Personajes**, **Pelicula** participan uno o varios **Personajes**, **Peliculas** estaran rodadas en uno o varios **Paises** y las **Peliculas** son producidas pro una o varias **Productoras**.
## Modelo entidad relación
![[EntidadRelacion.PNG]](Imagenes/EntidadRelacion.PNG)
## Modelo relacional
![[ModeloRelacional.PNG]](Imagenes/ModeloRelacional.PNG)

# Diseñar schema
## Casos de uso
**Actor**: Para actor  me interesa cuando me meta en la pagina web poder ver solo los datos de los actores, sera crear un documento para el solo con una lista de peliculas.  
**Director**: Nos interesa ver sus datos y la participacion de sus peliculas, este tendra una coleecion propia mas la lista de nombres.  
**Personaje**: Nos interesa saber mas informacion sobre ese personaje y tendra un documento propio.  
**Productora**: Nos interesa saber que datos tiene la propia productora con una lista de las peliculas en las que ayudo.  
**Paises**: Este no sera una colleccion propia sino que ira embebido en pelicula, para saber en que ubicaciones se hizo la pelicula.  
**Pelicula**: En este caso nos gustaria enseñar varios datos relacionado con pelicula que tendremos solo los nombres de los actores, personajes, productora y paises estara embebido por pelicula ya que al acceder a una pelicula querremos enseñar todo lo relacionado de la pelicula.
## Validación
- **Actor** tendra una coleccion sola para acceder a sus datos en algun momento.
- **Director** tendra una coleccion para acceder a sus datos.
- **Personaje** tendra una coleccion propia con el nombre del **Actor** que lo interpreta.
- **Productora** sera una coleccion propia por si queremos tener mas informacion sobre el
- **Pelicula** tendra los nombres de los **Actores**, **Personajes**, **Directores**, **Productoras** y **Paises** ira embebido en **Peliculas**.
> Las colecciones no necesariamente tendran todos los datos de otro sino que tendra los que mas interese de la otra coleccion.
# Crear docker-compose
```
version: "3.8"
services:
  mongo:
    image: mongo:6.0
    container_name: mongo
    environment:
        - MONGO_INITDB_ROOT_USERNAME=root
        - MONGO_INITDB_ROOT_PASSWORD=password
    restart: unless-stopped
    ports:
      - "27017:27017"
    volumes:
      - ./database/db:/data/db

  mongo-express:
    image: mongo-express
    container_name: mexpress
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=root
      - ME_CONFIG_MONGODB_ADMINPASSWORD=password
      - ME_CONFIG_MONGODB_SERVER=mongo
      - ME_CONFIG_BASICAUTH_USERNAME=mexpress
      - ME_CONFIG_BASICAUTH_PASSWORD=mexpress
    links:
      - mongo
    restart: unless-stopped
    ports:
      - 8085:8081
    depends_on:
      - mongo
```
>Viene con una aplicacion para que pueda ver la base de datos que es mongo-express, con un usuario y contraseña 'mexpress'.
# Crear querys
## Listar, filtrar y ordenar datos
```
use('Peliculas');
// Fichero script con varias órdenes de selección, por id, filtros por varios criterios, and/or, y aplicando ordenación
// Selección por ID
//db.pelicula.find({ _id: ObjectId("646b58f527db1ed47118c60a") });

// Filtro que tengan la misma composicion
// Pelicula que tenga  titulo Titanic y su genero Drama
//db.pelicula.find({
//  titulo: "Titanic",
//  genero: "Drama"
//});

// Filtro  utilizando operador OR
// Si en su genero es Drama o Accion y que su anioProduccion se igual a 2009
// db.pelicula.find({
//  $or: [
//    { genero: "Drama" },
//    { genero: "Acción" }
//  ],
//  anioProduccion: { $gte: 2009 }
//});

// Aplicar ordenación ascendente por un campo
//db.pelicula.find().sort({ anioProduccion: 1 });

// Aplicar ordenación descendente por un campo
//db.pelicula.find().sort({ calificacion: -1 });

// Combinar filtros, operadores lógicos y ordenación
//Obtendremos peliculas que tenga ciudad Nueva York o que sea del pais Italia y que
//su anioproduccion  sea mayor de 1900 ordenado por calificacion de manera ascendente
//Esta consulta se mete dentro de un objeto y busca dentro de el
db.pelicula.find({
  $and: [
    {
      $or: [
        { "paisCiudad.ciudad": "Nueva York" },
        { "paisCiudad.pais": "Italia" }
      ]
    },
    { anioProduccion: { $gt: 1900 } }
  ]
}).sort({ calificacion: 1 });
```
>Para poder utilizar las querys se tiene que terminar el nombre del archivo con '.mongodb.js' y asi realizar las consultas.
## Borrar, modificar y insertar datos
```
use('Peliculas')
//Modificacion, insertar y borrar datos

//Modificar
//Modificar uno en concreto
// Modifico el nombre del actor  buscado por id unico creado por mongo
//db.actor.updateOne(
//    { _id: ObjectId("646b58f527db1ed47118c5f3") },
//    { $set: { nombre: "Harry Petas" , nacionalidad: "Grifindor"} }
//  );
  
//Modificar varios
//db.actor.updateMany(
//    {idActor:"1"},
//    {$set: {nacionalidad:"Spain"}}
//);

//Eliminar 
//Eliminar uno 
//db.actor.deleteOne(
//    { "_id": ObjectId("646b58f527db1ed47118c5f3") }
//    );

// Eliminar varios
//db.actor.deleteMany(
//    { "idActor": "11" }
//    );


// Insertar un actor
//db.actor.insertOne({
//    "idActor": "000",
//    "nombre": "Jane Smith",
//    "dni": "987654321",
//    "nacionalidad": "USA",
//    "Peliculas":["Casi 300","Iron man","Blade"]
//  });


// Insertar varios actores 
//db.actor.insertMany([
//    {
//      "idActor": "11",
//      "nombre": "Flanders",
//      "dni": "987654321",
//      "nacionalidad": "caca",
//      "Peliculas":["Casi 300","Iron man","Blade"]
//    },
//    {
//      "idActor": "99",
//      "nombre": "Marcello",
//      "dni": "456789123",
//      "nacionalidad": "caca",
//      "Peliculas":["Casi 300","Iron man","Blade"]
//    }
//  ]);
```

# Opcional 
## Atlas


