## test crud spring boot + react ##

### Backend
**Applicación Spring boot  Rest Api**

Al ejecutar el proyecto (run in main class: SpringBootMysqlCrudApplication)  
se tendrá acceso al crud solicitado para el registro de tareas.

####Se han creado los metodos solicitados
* crear
* eliminar
* actualziar
* leer

####El desarrollo del backend contempla:

**Tecnologías:**
- Spring boot 2.1
- java 1.8
- desarrollado con Intelij Idea
- spring jpa

**Implementación:**
- Swagger2 

####la estructura del proyecto mantiene el tregistro por capas de:  
- Modelo
- Repository
- Servicios
- Controller

La interfaz TaskService se crea solo para mantener la estructura idealizada y accesar a la implementación


## Base de datos 
Se ha utilizado mysql para la persistencia de datos, para levantar el proyecto  
 junto a la bdd se dispone del script ubicado en "script-sql"

**nota:**
existe un archivo docker-compose que tiene la configuración para levantar rapidamente una instancia 
de mysql + phpmyadmin en la carpeta mysql-docker 

cd mysql-docker  
docker-compose up -d


## Frontend
