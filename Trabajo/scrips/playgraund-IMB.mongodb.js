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
  
  