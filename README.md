# Práctica 9 - Aplicación de registro de Funko Pops

## Daniel Jorge Acosta

### alu0101239187@ull.edu.es

[![tests](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/actions/workflows/node.js.yml)

[![coveralls](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/actions/workflows/coveralls.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2223_ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187)

## Índice

- [Introducción](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/#introducción)
- [Clase Funko](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupon/#clase-funko)
- [Comandos de la aplicación](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupon/#comandos-de-la-aplicación)
- [Ejercicio PE103](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct07-destravate-datamodel-grupon/#ejercicio-pe103)
- [Conclusión](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/#conclusión)
- [Bibliografía](https://ull-esit-inf-dsi-2223.github.io/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101239187/#bibliografía)

## Introducción

Este proyecto consiste en la implementación de una aplicación que permita el almacenamiento de información de los Funko Pops de varios usuarios. Este sistema se encuentra desarrollado en Typescript, tratando de seguir los principios SOLID del diseño orientado a objetos. La información de los Funkos se hace persistente mediante ficheros JSON que se guardan en carpetas pertenecientes a los distintos usuarios del sistema. El proyecto sigue la siguiente estructura de directorios:

- **dist**: Código JavaScript generado
- **docs**: Documentación del código
- **src**: Código fuente TypeScript
  - **classes**: Clases básicas
  - **enums**: Enumeraciones
  - **pe-103**: Ejercicio realizado en el aula durante la PE 103
- **tests**: Tests del código fuente TypeScript

Durante el desarrollo del sistema, se han utilizado las siguientes herramientas:

- **ESLint** para la comprobación de errores
- **Prettier** para el formateo del código
- **TypeDoc** para la generación automática de documentación del código
- **Mocha** y **Chai** para el desarrollo dirigido por pruebas
- **C8** para la comprobación del cubrimiento del código fuente
- **GitHub Actions** para la integración continua del código ejecutado en **Node.js**, el envío de información de cubrimiento a **Coveralls** y la comprobación de calidad y seguridad del código fuente con **Sonar Cloud**

## Clase Funko

La clase `Funko` y se utiliza para almacenar los datos de los Funkos que se almacenan en el sistema y cuenta con los siguientes atributos:

- ID del Funko. La clase controla que sea positivo.
- Nombre del Funko.
- Descripción del Funko.
- Tipo de Funko. Se puede ver una definición más detallada en el apartado _Enumeración FunkoTypes_.
- Género del Funko. Se puede ver una definición más detallada en el apartado _Enumeración FunkoGenres_.
- Número del Funko. La clase controla que sea positivo.
- Exclusividad del Funko.
- Características especiales del Funko.
- Valor de mercado del Funko. La clase controla que sea un valor positivo.

También posee un método estático `instanceFromParams` que devuelve una instancia de la clase con la información que se le pasa como parámetros en orden, utilizado para crear los Funkos a partir de la información que reside en los ficheros JSON.

### Enumeración FunkoTypes

La enumeración FunkoTypes define los distintos tipos de los que puede ser un Funko, los cuales son Pop!, Pop! Rides, Vynil Soda y Vynil Gold.

### Enumeración FunkoGenres

La enumeración FunkoGenres define los distintos géneros a los que puede pertenecer un Funko, los cuales son Animación, Películas y TV, Videojuegos, Deportes, Música y Anime.

## Comandos de la aplicación

La aplicación hace uso de las siguientes funciones para ejecutar los comandos de la aplicación:

- `add`: Añade un Funko a la colección del usuario. Para esto, comprueba si existe algún fichero con el mismo ID del Funko a guardar y si existe un directorio de usuario. Si alguno no existe, lo crea para almacenar la información del nuevo Funko. Si el fichero del Funko ya existe, muestra un mensaje indicando el error. 
- `update`: Actualiza un Funko de la colección del usuario. Para esto, comprueba si existe el fichero con el mismo ID del Funko a actualizar. Si el fichero existe actualiza su contenido. En caso contrario, muestra un mensaje indicando el error.
- `remove`: Borra un Funko de la colección del usuario. Para esto, comprueba si existe el fichero con el mismo ID del Funko a eliminar. Si el fichero existe lo elimina. En caso contrario, muestra un mensaje indicando el error.
- `read`: Muestra la información de un Funko de la colección de un usuario. Para esto, comprueba si existe algún fichero con el mismo ID del Funko a mostrar. Si el fichero existe, muestra la información del Funko. En caso contrario, muestra un mensaje indicando el error.
- `list`: Muestra la información de todos los Funkos de la colección de un usuario. Para esto, comprueba si existe el directorio del usuario y muestra los Funkos de la colección. Si el directorio no existe, muestra un mensaje indicando el error.
- `readFile`: Función utilizada por las opciones de la aplicación. Lee un fichero JSON y convierte su contenido en un objeto Funko.
- `writeFile`: Función utilizada por las opciones de la aplicación. Recibe un objeto Funko y escribe su información en un fichero JSON.
- `printFunko`: Función utilizada por las opciones de la aplicación. Muestra por pantalla la información de un objeto Funko.

### Funcionamiento de la aplicación

Para funcionar, la aplicación hace uso del paquete `yargs` para recibir los argumentos por línea de comandos y ejecuta el comando que haya solicitado el usuario mediante las funciones anteriormente mencionadas.

## Ejercicio PE103

Este ejercicio consistió en utilizar el patrón *Template method* para crear un lector de ficheros CSV y un lector ficheros JSON que contienen los datos del problema de la mochila. En esta ocasión, solamente se tratará el lector de ficheros CSV y la clase padre, ya que no se pudo implementar el lector de Ficheros JSON.

### Clase abstracta FileReader

La clase `FileReader` es la que contiene el método plantilla y los métodos *hook*. El método plantilla `process`, lee un fichero de forma síncrona y pasa su contenido al método abstracto `processText`.

### Clase CSVReader

La clase `CSVReader` hereda de la clase `FileReader` e implementa la función `processText` que procesa el texto, separando las líneas por comas para obtener los pesos y los beneficios de los elementos de la mochila y devolverla formateada en un tipo `BackpackData`.

## Conclusión

Con esta práctica hemos comenzado a tratar el uso de ficheros con Typescript de manera síncrona y hemos comenzado a incorporar librerías de ejecución a nuestros programas, como son `chalk`, `yargs` y `fs`. Además, se han tenido que utilizar módulos ESM, teniendo que cambiar en cierta medida la configuración del proyecto y algunas librerías, como es el caso del cambio de `nyc` a `c8`. Como anotación final, en un principio la QualityGate de **SonarCloud** no aparece superada debido a la complejidad que reside en eliminar bugs que aparecen de manera casi forzosa al utilizar `yargs`, la necesidad de alcanzar un 80% de cubrimiento de código total en una aplicación que funciona con ficheros y mediante la consola y la obligación de llegar a una duplicación del 3%.

## Bibliografía
