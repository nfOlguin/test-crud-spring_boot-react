## base de datos mysql en docker

* Se agrega script sql de bdd como primera opción para revisar los registros 
el archivo se encuente en "script-sql"

________________________________________________________________________
Esta es una segunda opción para ejecutrar la bdd en docker, de esta forma será posible mantener una instancia dockerizada de la base de datos
además de una instacia de phpmyadmin para la administración

**Pasos:**

- install docker
- install docker-compose
- cd mysql-doker (en raiz del proyecto)
- docker-compose up -d

Esto levantará la bdd de forma automática el ejecutando la configuración del archivo docker-compose.yaml, para probarlo ver a url:
http://localhost:8080/index.php

user: root 

pass: coopeuch

nota: las instacias creadas deben ser utilizadas solo para prueba del proyecto.
