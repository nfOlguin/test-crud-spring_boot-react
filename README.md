## crud spring boot + react redux ##

### Backend
**Applicación Spring boot  Rest Api**

Al ejecutar el proyecto (run in main class: SpringBootMysqlCrudApplication)  
se tendrá acceso al crud solicitado para el registro de tareas.  

#### Se han creado los metodos solicitados
* crear
* eliminar
* actualziar
* leer

#### El desarrollo del backend contempla:

**Tecnologías:**
- Spring boot 2.1
- java 1.8
- desarrollado con Intelij Idea
- spring jpa

**Implementación:**
- Swagger2  -> http://localhost:8082/swagger-ui.html#/task-controller
#### La estructura del proyecto mantiene el tregistro por capas de:  
- Modelo
- Repository
- Servicios
- Controller

La interfaz TaskService se crea solo para mantener la estructura y seguir buenas prácticas  
haciendo la inyección del servicio a traves de su interfaz


## Base de datos 
Se ha utilizado mysql para la persistencia de datos.  
Para levantar el proyecto junto a la bdd se dispone del script ubicado en la carpeta "script-sql"

**nota:**
existe un archivo docker-compose que tiene la configuración para levantar rapidamente una instancia docker 
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
En raiz del proyecto  
- cd react-redux-coopeuch
-npm install (para inicializar dependencias redux, node-sass)
-npm start

#### pendiente de frontend

**La applicaión front no registra en API, pendiente conectar :/**

____________________________________________    

segunda parte de entrega, entrega oficial viernes 16, 08:00am 

Se intentó mantener la mejor estructura del proyecto, tanto back y front
priorizando el lógica e interfaz, los pendientes se deben a falta de tiempo


Naaman Falcón Olguín. 


