# Grupo_8_VinoYSeFue
## Presentación
Proyecto creado utilizando el patrón de diseño MVC con *Express*, y *MySQL* en la base de datos. Paralelamente tiene un dashboard hecho en *React* que consume APIs generadas en la aplicación, por medio del cual se puede hacer el ABM de productos.
## Requerimientos
- Tener instalado [Node](https://nodejs.org/es)
- Tener un servidor de MySQL corriendo en el sistema. Puede instalar [XAMPP](https://www.apachefriends.org/es/index.html) o [MySQL Server](https://dev.mysql.com/downloads/mysql/) u otro de su preferencia.
## Dependencias incluídas en el proyecto
### En el servidor de Node
    - "bcryptjs": "^2.4.3",
    - "concurrently": "^7.6.0",
    - "cookie-parser": "~1.4.4",
    - "cors": "^2.8.5",
    - "debug": "~2.6.9",
    - "dotenv": "^16.0.3",
    - "ejs": "~2.6.1",
    - "express": "~4.16.1",
    - "express-session": "^1.17.3",
    - "express-validator": "^6.14.2",
    - "http-errors": "~1.6.3",
    - "method-override": "^3.0.0",
    - "morgan": "~1.9.1",
    - "multer": "^1.4.5-lts.1",
    - "mysql2": "^2.3.3",
    - "nodemon": "^2.0.19",
    - "sequelize": "^6.24.0",
    - "sequelize-cli": "^6.5.1"
### En frontend de React
    - "@testing-library/jest-dom": "^5.16.5",
    - "@testing-library/react": "^13.4.0",
    - "@testing-library/user-event": "^13.5.0",
    - "react": "^18.2.0",
    - "react-dom": "^18.2.0",
    - "react-router-dom": "^6.4.4",
    - "react-scripts": "5.0.1",
    - "web-vitals": "^2.1.4"
## Cómo levantar el servidor
- Una vez clonado el proyecto, abrir una terminal, entrar en la carpeta `/Grupo_8_VinoYSeFue` y ejecutar el comando `npm install` para instalar las dependencias de Node
- Crear el archivo `.env` con el contenido del archivo `.env.example` y darles los valores correspondientes a su sistema para la conexión con la base de datos
- Una vez creadas las variables de entorno en el archivo `.env` ejecutar en la terminal el siguiente comando: `npm run create:db`, esto creará el schema y correrá las migraciones para crear la estrutura de la base de datos, y luego correrán los seeders a los efectos de poblarla con los datos iniciales.
- Levantar el servidor ejecutando el comando `npm run server`
## Cómo levantar el dashboard de React
- Abrir una terminal, entrar en la carpeta `/Grupo_8_VinoYSeFue/admin`
- Ejecutar el comando `npm install` para instalar las dependencias de React
- Ejecutar el comando `npm run start` para levantar el proyecto de React, cuyo funcionamiento depende del servidor levantado en el punto anterior.
