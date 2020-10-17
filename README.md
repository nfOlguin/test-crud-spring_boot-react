## Crud spring boot + react redux ##

### Backend
**Aplicación Spring boot  Rest Api**

Al ejecutar el proyecto (run in main class: SpringBootMysqlCrudApplication)  
se tendrá acceso al crud solicitado para el registro de tareas.  

#### Se han creado los métodos solicitados
* crear
* eliminar
* actualizar
* leer

#### El desarrollo del backend contempla:

**Tecnologías:**
- Spring boot 2.1
- java 1.8
- desarrollado con Intelij Idea
- spring jpa

**Implementación:**
- Swagger2  -> http://localhost:8082/swagger-ui.html#/task-controller
#### La estructura del proyecto mantiene el registro por capas de:  
- Modelo
- Repository
- Servicios
- Controller

* La interfaz TaskService se crea solo para mantener buenas prácticas

## Base de datos 
Se ha utilizado mysql para la persistencia de datos.  
Para levantar el proyecto junto a la bdd se dispone del script ubicado en la carpeta "script-sql"

**opcional:**
existe un archivo docker-compose que tiene la configuración para levantar rápidamente una instancia docker 
de mysql + phpmyadmin en la carpeta mysql-docker, para ejecutarlo es necesario tener instalado docker y docker-compose  
__pasos:__  
cd mysql-docker  
docker-compose up -d 

## Frontend
se crea estructura para proyecto frontend incorporando react redux, la estructura base contiene:  
componentes, redux (actions, reducers, store). el proyecto frontend a la fecha muestra:  
pantalla principal de tareas muestra el listado de tareas registrados y las opciones para:  
* agregar tarea
* modificar tarea
* eliminar tarea
* lista de tareas registradas

Ejecución:  
(ubicado en la raíz del proyecto )
- cd react-redux-coopeuch
- npm install (para inicializar dependencias redux, node-sass)
- npm start

#### pendiente de frontend

**La applicaión front no registra en API, pendiente conectar a los servicios utilizando **AXIOS** 

____________________________________________    

segunda parte de entrega, entrega oficial viernes 16, 08:00am 

Se intentó mantener la mejor estructura del proyecto, tanto back y frontend
priorizando el lógica e interfaz, los pendientes se deben a falta de tiempo


**nota:** (única actualización posterior a fecha de entrega) Mi perfil corresponde al desarrollo backend pero mi objetivo es ser un completo fullstack


Naaman Falcón Olguín. 


