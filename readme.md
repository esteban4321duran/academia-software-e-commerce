# Academia Software E-Commerce

## Descripción

Este sistema de provee una plataforma de e-commerce donde Academia Software puede ofrecer sus cursos y brindar acceso al contenido de los mismos a sus usuarios.  
También tiene como objetivos:

-   Brindar una alta usabilidad a los usuarios.
-   Gozar de un alto nivel de seguridad.

Objetivos futuros para el sistema:

-   Proveer servicio al clente despues de la venta.
-   Admitir múltiples formas de pago
-   Brindar una alta usabilidad al usuario
-   Tener un alto nivel de seguridad

## Contenidos

-   [Tecnologias utilizadas](#tecnologias-utilizadas)
-   [Requisitos previos para ejecutar el proyecto](#requisitos-previos-para-ejecutar-el-proyecto)
-   [Instalar el proyecto](#instalar-el-proyecto)
-   [Ejecutar el proyecto](#ejecutar-el-proyecto)
-   [Ejecutar las pruebas del proyecto](#ejecutar-las-pruebas-del-proyecto)
-   [Crédtios](#créditos)

## Tecnologias Utilizadas

Una plataforma de e-commerce demanda el uso de tecnologías web y de persistencia de datos. A continuación se enuncian aquellas que fueron utilizadas, seguidas de una breve justificación:

### Lenguaje de Programación

[Typescript](https://www.typescriptlang.org/)  
El lenguaje de programación dominante en la web es JavaScript.  
TypeScript fue utilizado para añadir un sistema de tipos y múltiples caracteristicas propias de un lenguaje orientado a objetos a JavaScript.

### Frontend

[React](https://es.reactjs.org/) y [MaterialUI](https://mui.com/)  
React se utilizó para el desarrollo de una interfaz gráfica de usuario altamente interactiva.  
MaterialUI nos brinda los elementos necesarios para su rápida elaboración. Además, con esta librería obtuvimos un "look and feel" moderno y profesional, mejorando la usabilidad y la experiencia del usuario.

### Backend

[NodeJS](https://nodejs.org/es/), [Express](http://expressjs.com/es/), [Sequelize](https://sequelize.org/) y [MySQL](https://www.mysql.com/)  
La API que recupera los datos para ser mostrados en la interfaz se ejecuta sobre NodeJS.  
Express se utilizó como framework para la elaboración de un servidor para recuperar los datos de la aplicación.  
El ORM Sequelize se utilizó para seguir un enfoque orientado al momento de manipular los datos, los cuales fueron persistidos utilizando la base de datos relacional MySQL.

### Pruebas

[Jest](https://jestjs.io/)  
Se utilizó la librería Jest para la elaboración de pruebas unitarias debido a su fácil integración con TypeScript y React.

## Requisitos previos para ejecutar el proyecto

1. Tener NodeJS instalado en su computadora
2. Tener [git](https://git-scm.com/) instalado en su computadora
3. Tener MySQL instalado en su computadora
4. Crear una base de datos en su servidor local de MySQL o utilizar una existente. Se recomienda llamarla de la siguiente manera:
   _academia-software_

## Instalar el proyecto

1.  Clonar el repositorio ejecutando el siguiente comando en una terminal:

        git clone https://github.com/slendixx/academia-software-e-commerce

2.  En una terminal, navegar hasta el subdirectorio "api" dentro directorio del repositorio clonado:

        cd academia-software-e-commerce/api

3.  Crear el archivo "conexionBD.json"
4.  Pegar lo siguiente en el archivo "conexionDB.json"

### conexionBD.json

    {
        "usuario": "suNombreDeUsuario",
        "contraseña": "suContraseña",
        "puerto": 3306,
        "baseDeDatos": "academia-software"
    }

5. Reemplazar los valores de los campos _usuario_, _contraseña_ y _puerto_ con los que haya configurado en su servidor local de MySQL (normalmente establecido durante la instalación).  
   El valor del campo _baseDeDatos_ debe ser el nombre de la base de datos creada anteriormente.

### Ejemplo

    {
        "usuario": "root",
        "contraseña": "1234",
        "puerto": 3306,
        "baseDeDatos": "academia-software"
    }

Por razones de seguridad, estas credenciales y parámetros no se incluyen en el repositorio del proyecto.

6.  En el directorio _academia-software-e-commerce/api_ instalar las dependencias de la API ejecutando el siguiente comando:

        npm install

7.  Navegar hasta el directorio _academia-software-e-commerce/cliente-web_
8.  Instalar las dependencias del cliente web ejecutando nuevamente el comando:

        npm install

## Ejecutar el proyecto

Una vez instalado el proyecto, para ejecutar el mismo se deben iniciar tanto la API como el cliente web

1.  En una terminal, navegar hasta el directorio _academia-software-e-commerce/api_ y ejecutar el siguiente comando:

        npm start

2.  En una nueva terminal, navegar hasta el directorio _academia-software-e-commerce/cliente-web_ y ejecutar nuevamente el comando:

        npm start

Una vez que se inicie el cliente web, se abrirá automáticamente una nueva pestaña en su navegador permitiendole visualizar el proyecto.

## Ejecutar las pruebas del proyecto

Para ejecutar las pruebas unitarias ya sean de la API o del cliente web debe navegar en una terminal hasta el directorio _academia-software-e-commerce/api_ o _academia-software-e-commerce/cliente-web_ respectivamente. Una vez ubicado en dicho directorio, ejecutar el siguiente comando:

        npm test

## Créditos

### Desarrollador

[Esteban Duran](https://github.com/slendixx)

### Universidad

[UTN FRT](http://www.frt.utn.edu.ar/)
