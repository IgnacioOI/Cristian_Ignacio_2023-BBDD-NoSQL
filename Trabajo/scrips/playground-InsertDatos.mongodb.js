//creacion de base de datos
use("Peliculas");
// crear sus colecciones con sus schemas
db.createCollection('actor', {
  "validator": {
    "$jsonSchema": {
      "bsonType": "object",
      "properties": {
        "idActor": {
          "bsonType": "string",
          "description": "Un identificador único de cada actor"
        },
        "nombre": {
          "bsonType": "string",
          "description": "El nombre del actor"
        },
        "dni": {
          "bsonType": "string",
          "description": "El DNI del actor"
        },
        "nacionalidad": {
          "bsonType": "string",
          "description": "La nacionalidad del actor"
        },
        "peliculas": {
          "bsonType": "array",
          "description": "Lista de películas del actor",
          "items": {
            "bsonType": "string"
          }
        }
      },
      "required": ["idActor"],
    }
  }
});

db.createCollection('director', {
  "validator": {
    "$jsonSchema": {
      "title": "director",
      "description": "Guarda datos de directores",
      "type": "object",
      "properties": {
        "idDirector": {
          "description": "Un identificador único de cada director",
          "bsonType": "string"
        },
        "nombre": {
          "description": "El nombre del director",
          "bsonType": "string"
        },
        "dni": {
          "description": "El DNI del director",
          "bsonType": "string"
        },
        "nacionalidad": {
          "description": "La nacionalidad del director",
          "bsonType": "string"
        },
        "peliculas": {
          "description": "Lista de películas del director",
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        }
      },
      "required": [
        "idDirector"
      ]
    }
  }
});

  
  db.createCollection('pelicula', {
    "validator": {
      "$jsonSchema": {
        "bsonType": "object",
        "properties": {
          "idPelicula": {
            "description": "Un identificador único de cada película",
            "type": "string"
          },
          "nombrePersonaje": {
            "description": "El nombre de cada personaje que participa en la película",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "nombreActor": {
            "description": "Nombre de cada personaje de la película, que a su vez nos lleva al actor",
            "type": "array"
          },
          "nombreProductora": {
            "description": "Nombre de las productoras implicadas en la película",
            "type": "array"
          },
          "titulo": {
            "description": "Título de cada película",
            "type": "string"
          },
          "genero": {
            "description": "Géneros de cada película",
            "type": "array"
          },
          "idioma": {
            "description": "Idiomas de cada película",
            "type": "array"
          },
          "subtitulosEspañol": {
            "description": "Si es true, contiene subtítulos en español",
            "type": "boolean"
          },
          "anioProduccion": {
            "description": "Año en que se produjo la película",
            "type": "number"
          },
          "web": {
            "description": "URL de la película",
            "type": "string"
          },
          "duracion": {
            "description": "Duración de la película",
            "type": "number"
          },
          "calificacion": {
            "description": "Valoración de la película",
            "type": "number"
          },
          "fechaEstreno": {
            "description": "Fecha de estreno de la película en formato ISO 8601 (yyyy-MM-dd)",
            "type": "string",
            "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
          },
          "resumen": {
            "description": "Un breve resumen de la película",
            "type": "string"
          },
          "paisCiudad": {
            "description": "Nombre de los países y ciudades donde se ha rodado la película",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "pais": {
                  "description": "Nombre del país donde ha sido rodada la película",
                  "type": "string"
                },
                "ciudad": {
                  "description": "Nombre de la ciudad donde ha sido rodada la película",
                  "type": "string"
                }
              }
            }
          }
        },
        "required": [
          "idPelicula",
          "titulo",
          "nombreProductora",
          "nombreActor",
          "nombrePersonaje",
          "paisCiudad",
          "web"
        ]
      }
    }
  }
  
  );
  
  db.createCollection('personaje', {
    "validator": {
      "$jsonSchema": {
        "title": "personaje",
        "description": "Guarda datos de los personajes, parte de datos del actor que lo representa y la pelicula en la que se lleva a cabo",
        "type": "object",
        "properties": {
          "idPersonaje": {
            "description": "Un identificador único de cada personaje",
            "type": "string"
          },
          "nombrePelicula": {
            "description": "La ID de la película en la cual actúa",
            "type": "string"
          },
          "nombreActor": {
            "description": "La ID del actor que interpreta el personaje",
            "type": "string"
          },
          "papel": {
            "description": "Papel que desempeña el personaje",
            "type": "string"
          }
        },
        "required": [
          "idPersonaje",
          "nombrePelicula",
          "nombreActor"
        ]
      }
    }
  });
  
  db.createCollection('productora', {
    "validator": {
      "$jsonSchema": {
        "title": "productora",
        "description": "Guarda datos de las productoras de las películas",
        "type": "object",
        "properties": {
          "nombreProductora": {
            "description": "Un identificador único de cada productora",
            "type": "string"
          },
          "telefono": {
            "description": "El teléfono de la productora",
            "type": "string"
          },
          "pais": {
            "description": "El país de origen de la productora",
            "type": "string"
          },
          "sitioWeb": {
            "description": "La URL de la página web de la productora",
            "type": "string"
          },
          "fechaCreacion": {
            "description": "La fecha en la que se creó la productora",
            "bsonType": "date"
          },
          "peliculas": {
            "description": "Lista de películas de la productora",
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "nombreProductora",
          "telefono"
        ]
      }
    }
  });
  
//insertar los datos de cada coleccion
//Agregar diferentes actores
db.actor.insertMany([
  {
    idActor: "1",
    nombre: "John Doe",
    dni: "123456789",
    nacionalidad: "USA",
    peliculas: ["Titanic", "The Shawshank Redemption"]
  },
  {
    idActor: "2",
    nombre: "Jane Smith",
    dni: "987654321",
    nacionalidad: "UK",
    peliculas: ["Inception", "The Godfather"]
  },
  {
    idActor: "3",
    nombre: "Michael Johnson",
    dni: "456789123",
    nacionalidad: "Canada",
    peliculas: ["Pulp Fiction", "Fight Club"]
  },
  {
    idActor: "4",
    nombre: "Laura Davis",
    dni: "654321987",
    nacionalidad: "Australia",
    peliculas: ["The Dark Knight", "The Matrix"]
  },
  {
    idActor: "5",
    nombre: "Robert Johnson",
    dni: "789123456",
    nacionalidad: "USA",
    peliculas: ["Goodfellas", "The Avengers"]
  },
  {
    idActor: "6",
    nombre: "Maria Lopez",
    dni: "321987654",
    nacionalidad: "Spain",
    peliculas: ["Amélie", "Volver"]
  },
  {
    idActor: "7",
    nombre: "Mohammed Ali",
    dni: "654789321",
    nacionalidad: "Egypt",
    peliculas: ["Lawrence of Arabia", "The Mummy"]
  },
  {
    idActor: "8",
    nombre: "Emma Thompson",
    dni: "987654321",
    nacionalidad: "UK",
    peliculas: ["Sense and Sensibility", "Love Actually"]
  },
  {
    idActor: "9",
    nombre: "Jean Dujardin",
    dni: "456123789",
    nacionalidad: "France",
    peliculas: ["The Artist", "The Wolf of Wall Street"]
  },
  {
    idActor: "10",
    nombre: "Salma Hayek",
    dni: "852369741",
    nacionalidad: "Mexico",
    peliculas: ["Frida", "Desperado"]
  },
  
]);

// agregar directores
db.director.insertMany([
  {
    idDirector: "1",
    nombre: "Steven Spielberg",
    dni: "123456789",
    nacionalidad: "Estados Unidos",
    peliculas: ["Jurassic Park", "E.T. the Extra-Terrestrial", "Jaws"]
  },
  {
    idDirector: "2",
    nombre: "Christopher Nolan",
    dni: "987654321",
    nacionalidad: "Reino Unido",
    peliculas: ["Inception", "The Dark Knight", "Interstellar"]
  },
  {
    idDirector: "3",
    nombre: "Quentin Tarantino",
    dni: "456789123",
    nacionalidad: "Estados Unidos",
    peliculas: ["Pulp Fiction", "Kill Bill", "Django Unchained"]
  },
  {
    idDirector: "4",
    nombre: "Martin Scorsese",
    dni: "654321987",
    nacionalidad: "Estados Unidos",
    peliculas: ["Goodfellas", "Taxi Driver", "The Departed"]
  },
  {
    idDirector: "5",
    nombre: "Hayao Miyazaki",
    dni: "789123456",
    nacionalidad: "Japón",
    peliculas: ["Spirited Away", "Princess Mononoke", "My Neighbor Totoro"]
  },
  
    {
      idDirector: "6",
      nombre: "Alfred Hitchcock",
      dni: "135792468",
      nacionalidad: "Reino Unido",
      peliculas: ["Psycho", "Vertigo", "Rear Window"]
    },
    {
      idDirector: "7",
      nombre: "Stanley Kubrick",
      dni: "246813579",
      nacionalidad: "Estados Unidos",
      peliculas: ["2001: A Space Odyssey", "The Shining", "A Clockwork Orange"]
    },
    {
      idDirector: "8",
      nombre: "Akira Kurosawa",
      dni: "864209753",
      nacionalidad: "Japón",
      peliculas: ["Seven Samurai", "Rashomon", "Yojimbo"]
    },
    {
      idDirector: "9",
      nombre: "Pedro Almodóvar",
      dni: "975310864",
      nacionalidad: "España",
      peliculas: ["All About My Mother", "Talk to Her", "Volver"]
    },
    {
      idDirector: "10",
      nombre: "David Fincher",
      dni: "357924680",
      nacionalidad: "Estados Unidos",
      peliculas: ["Fight Club", "Gone Girl", "The Social Network"]
    }
]);

// agregar peliculas
db.pelicula.insertMany([
    {
        "idPelicula": "001",
        "nombrePersonaje": ["John Doe", "Jane Smith"],
        "nombreActor": ["John Actor", "Jane Actress"],
        "nombreProductora": ["Warner Bros", "Universal Pictures"],
        "titulo": "El Padrino",
        "genero": ["Drama", "Crimen"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 1972,
        "web": "http://www.elpadrinomovie.com",
        "duracion": 175,
        "calificacion": 9.2,
        "fechaEstreno": "1972-03-15",
        "resumen": "La saga de la familia Corleone y el mundo del crimen organizado.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Nueva York"
          },
          {
            "pais": "Italia",
            "ciudad": "Sicilia"
          }
        ]
      },

      {
        "idPelicula": "002",
        "nombrePersonaje": ["Michael Johnson", "Sarah Thompson"],
        "nombreActor": ["Michael Actor", "Sarah Actress"],
        "nombreProductora": ["Paramount Pictures", "Columbia Pictures"],
        "titulo": "Regreso al Futuro",
        "genero": ["Aventura", "Ciencia ficción"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 1985,
        "web": "http://www.backtothefuturemovie.com",
        "duracion": 116,
        "calificacion": 8.5,
        "fechaEstreno": "1985-07-03",
        "resumen": "Un adolescente viaja en el tiempo en un DeLorean junto con un científico excéntrico.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Hill Valley"
          }
        ]
      },
      
      
    {
        "idPelicula": "003",
        "nombrePersonaje": ["Emma Johnson", "David Smith"],
        "nombreActor": ["Emma Actress", "David Actor"],
        "nombreProductora": ["Warner Bros", "Universal Pictures"],
        "titulo": "Titanic",
        "genero": ["Drama", "Romance"],
        "idioma": ["Español"],
        "subtitulosEspañol": true,
        "anioProduccion": 1997,
        "web": "http://www.titanicmovie.com",
        "duracion": 194,
        "calificacion": 7.8,
        "fechaEstreno": "1997-12-19",
        "resumen": "La trágica historia de amor entre Rose y Jack a bordo del famoso Titanic.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Los Ángeles"
          },
          {
            "pais": "Reino Unido",
            "ciudad": "Southampton"
          }
        ]
      },
      {
        "idPelicula": "004",
        "nombrePersonaje": ["Luke Skywalker", "Princess Leia"],
        "nombreActor": ["Mark Hamill", "Carrie Fisher"],
        "nombreProductora": ["Lucasfilm Ltd.", "20th Century Studios"],
        "titulo": "Star Wars: Episode IV - A New Hope",
        "genero": ["Ciencia ficción", "Aventura"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 1977,
        "web": "http://www.starwars.com",
        "duracion": 121,
        "calificacion": 8.6,
        "fechaEstreno": "1977-05-25",
        "resumen": "La lucha entre el bien y el mal en una galaxia muy, muy lejana.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Los Angeles"
          },
          {
            "pais": "Túnez",
            "ciudad": "Tataouine"
          }
        ]
      },
      {
        "idPelicula": "005",
        "nombrePersonaje": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
        "nombreActor": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        "nombreProductora": ["Warner Bros. Pictures", "Heyday Films"],
        "titulo": "Harry Potter and the Philosopher's Stone",
        "genero": ["Fantasía", "Aventura"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 2001,
        "web": "http://www.harrypotter.com",
        "duracion": 152,
        "calificacion": 7.6,
        "fechaEstreno": "2001-11-16",
        "resumen": "El comienzo de las aventuras de Harry Potter en el mundo de la magia.",
        "paisCiudad": [
          {
            "pais": "Reino Unido",
            "ciudad": "Londres"
          },
          {
            "pais": "Estados Unidos",
            "ciudad": "Hollywood"
          }
        ]
      },
      {
        "idPelicula": "006",
        "nombrePersonaje": ["Tony Stark", "Pepper Potts"],
        "nombreActor": ["Robert Downey Jr.", "Gwyneth Paltrow"],
        "nombreProductora": ["Marvel Studios", "Paramount Pictures"],
        "titulo": "Iron Man",
        "genero": ["Acción", "Ciencia ficción"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 2008,
        "web": "http://www.ironmanmovie.com",
        "duracion": 126,
        "calificacion": 7.9,
        "fechaEstreno": "2008-05-02",
        "resumen": "El origen de Iron Man y la transformación de Tony Stark.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Los Angeles"
          },
          {
            "pais": "China",
            "ciudad": "Shanghai"
          }
        ]
      },
      {
        "idPelicula": "007",
        "nombrePersonaje": ["Frodo Baggins", "Gandalf"],
        "nombreActor": ["Elijah Wood", "Ian McKellen"],
        "nombreProductora": ["New Line Cinema", "WingNut Films"],
        "titulo": "The Lord of the Rings: The Fellowship of the Ring",
        "genero": ["Fantasía", "Aventura"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 2001,
        "web": "http://www.lordoftherings.com",
        "duracion": 178,
        "calificacion": 8.8,
        "fechaEstreno": "2001-12-19",
        "resumen": "El inicio del viaje épico de Frodo en la Tierra Media para destruir el Anillo Único.",
        "paisCiudad": [
          {
            "pais": "Nueva Zelanda",
            "ciudad": "Wellington"
          },
          {
            "pais": "Estados Unidos",
            "ciudad": "Los Angeles"
          }
        ]
      },

      {
        "idPelicula": "008",
        "nombrePersonaje": ["Bruce Wayne", "Selina Kyle"],
        "nombreActor": ["Christian Bale", "Anne Hathaway"],
        "nombreProductora": ["Warner Bros. Pictures", "Legendary Pictures"],
        "titulo": "The Dark Knight Rises",
        "genero": ["Acción", "Drama"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 2012,
        "web": "http://www.thedarkknightrises.com",
        "duracion": 165,
        "calificacion": 8.4,
        "fechaEstreno": "2012-07-20",
        "resumen": "El épico final de la trilogía de Batman dirigida por Christopher Nolan.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Nueva York"
          },
          {
            "pais": "Reino Unido",
            "ciudad": "Londres"
          }
        ]
      },
      {
        "idPelicula": "009",
        "nombrePersonaje": ["Katniss Everdeen", "Peeta Mellark"],
        "nombreActor": ["Jennifer Lawrence", "Josh Hutcherson"],
        "nombreProductora": ["Lionsgate", "Color Force"],
        "titulo": "The Hunger Games",
        "genero": ["Ciencia ficción", "Aventura"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 2012,
        "web": "http://www.thehungergamesmovie.com",
        "duracion": 142,
        "calificacion": 7.2,
        "fechaEstreno": "2012-03-23",
        "resumen": "La lucha de Katniss por sobrevivir en los Juegos del Hambre.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Los Angeles"
          },
          {
            "pais": "Canadá",
            "ciudad": "Vancouver"
          }
        ]
      },
      {
        "idPelicula": "010",
        "nombrePersonaje": ["Dominic Toretto", "Brian O'Conner"],
        "nombreActor": ["Vin Diesel", "Paul Walker"],
        "nombreProductora": ["Universal Pictures", "Original Film"],
        "titulo": "The Fast and the Furious",
        "genero": ["Acción", "Crimen"],
        "idioma": ["Inglés"],
        "subtitulosEspañol": true,
        "anioProduccion": 2001,
        "web": "http://www.fastandfurious.com",
        "duracion": 106,
        "calificacion": 6.8,
        "fechaEstreno": "2001-06-22",
        "resumen": "Una película llena de acción y carreras ilegales en las calles de Los Ángeles.",
        "paisCiudad": [
          {
            "pais": "Estados Unidos",
            "ciudad": "Los Angeles"
          },
          {
            "pais": "Japón",
            "ciudad": "Tokio"
          }
        ]
      }
      
      
      
     

      
      
      

      
]);
// agregar personajes
db.personaje.insertMany([
  {
    "idPersonaje": "P1",
    "nombrePelicula": "The Dark Knight",
    "nombreActor": "Heath Ledger",
    "papel": "The Joker"
  },
  {
    "idPersonaje": "P2",
    "nombrePelicula": "Harry Potter and the Sorcerer's Stone",
    "nombreActor": "Daniel Radcliffe",
    "papel": "Harry Potter"
  },
  {
    "idPersonaje": "P3",
    "nombrePelicula": "The Avengers",
    "nombreActor": "Robert Downey Jr.",
    "papel": "Iron Man"
  },
  {
    "idPersonaje": "P4",
    "nombrePelicula": "The Shawshank Redemption",
    "nombreActor": "Tim Robbins",
    "papel": "Andy Dufresne"
  },
  {
    "idPersonaje": "P5",
    "nombrePelicula": "The Godfather",
    "nombreActor": "Marlon Brando",
    "papel": "Don Vito Corleone"
  },
  {
    "idPersonaje": "P6",
    "nombrePelicula": "Titanic",
    "nombreActor": "Leonardo DiCaprio",
    "papel": "Jack Dawson"
  },
  {
    "idPersonaje": "P7",
    "nombrePelicula": "The Dark Knight",
    "nombreActor": "Heath Ledger",
    "papel": "Joker"
  },
  {
    "idPersonaje": "P8",
    "nombrePelicula": "The Lord of the Rings: The Fellowship of the Ring",
    "nombreActor": "Elijah Wood",
    "papel": "Frodo Baggins"
  },
  {
    "idPersonaje": "P9",
    "nombrePelicula": "Pulp Fiction",
    "nombreActor": "John Travolta",
    "papel": "Vincent Vega"
  },
  {
    "idPersonaje": "P10",
    "nombrePelicula": "The Shawshank Redemption",
    "nombreActor": "Tim Robbins",
    "papel": "Andy Dufresne"
  }
]);
// agregar productoras
db.productora.insertMany([
  {
    "nombreProductora": "Marvel Studios",
    "telefono": "123456789",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.marvelstudios.com",
    "fechaCreacion": ISODate("2021-05-21"),
    "peliculas": ["Iron Man", "Avengers: Endgame", "Black Panther"]
  },
  {
    "nombreProductora": "Nombre de la productora",
    "telefono": "Número de teléfono",
    "pais": "País de origen",
    "sitioWeb": "URL de la página web",
    "fechaCreacion": ISODate("2023-05-21"),
    "peliculas": ["Película 1", "Película 2", "Película 3"]
  },
  {
    "nombreProductora": "Universal Pictures",
    "telefono": "123456789",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.universalpictures.com",
    "fechaCreacion": ISODate("1922-06-08"),
    "peliculas": ["Jurassic Park", "Fast & Furious", "Despicable Me"]
  },
  {
    "nombreProductora": "Warner Bros. Pictures",
    "telefono": "987654321",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.warnerbros.com",
    "fechaCreacion": ISODate("1923-04-04"),
    "peliculas": ["The Dark Knight", "Harry Potter", "The Matrix"]
  },
  {
    "nombreProductora": "Paramount Pictures",
    "telefono": "555555555",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.paramount.com",
    "fechaCreacion": ISODate("1912-05-08"),
    "peliculas": ["Titanic", "Transformers", "Mission: Impossible"]
  },
  {
    "nombreProductora": "Sony Pictures Entertainment",
    "telefono": "111111111",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.sonypictures.com",
    "fechaCreacion": ISODate("1987-11-30"),
    "peliculas": ["Spider-Man", "Jumanji", "Men in Black"]
  },
  {
    "nombreProductora": "Walt Disney Pictures",
    "telefono": "999999999",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.waltdisneystudios.com",
    "fechaCreacion": ISODate("1923-10-16"),
    "peliculas": ["The Lion King", "Frozen", "Toy Story"]
  },
  {
    "nombreProductora": "20th Century Studios",
    "telefono": "777777777",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.20thcenturystudios.com",
    "fechaCreacion": ISODate("1935-05-31"),
    "peliculas": ["Deadpool", "Avatar", "X-Men"]
  },
  {
    "nombreProductora": "Studio Ghibli",
    "telefono": "555555555",
    "pais": "Japón",
    "sitioWeb": "https://www.ghibli.jp",
    "fechaCreacion": ISODate("1985-06-15"),
    "peliculas": ["My Neighbor Totoro", "Spirited Away", "Princess Mononoke"]
  },
  {
    "nombreProductora": "Pixar Animation Studios",
    "telefono": "999999999",
    "pais": "Estados Unidos",
    "sitioWeb": "https://www.pixar.com",
    "fechaCreacion": ISODate("1986-02-03"),
    "peliculas": ["Toy Story", "Finding Nemo", "The Incredibles"]
  }

]);
