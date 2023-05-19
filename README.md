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
- **Actor** tendra una coleccion sola para acceder a sus datos en algun momento.
- **Director** tendra una coleccion para acceder a sus datos.
- **Personaje** tendra una coleccion propia con el nombre del **Actor** que lo interpreta.
- **Productora** sera una coleccion propia por si queremos tener mas informacion sobre el
- **Pelicula** tendra los nombres de los **Actores**, **Personajes**, **Directores**, **Productoras** y **Paises** ira embebido en **Peliculas**.
> Las colecciones no necesariamente tendran todos los datos de otro sino que tendra los que mas interese de la otra coleccion.
## Validación

# Crear docker-compose
# Crear querys
