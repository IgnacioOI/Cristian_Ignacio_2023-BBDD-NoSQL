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








