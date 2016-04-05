## Doc01 inicialización

```
$ git checkout -b paso01init
$ git push -u origin paso01init 
```

Veamos el app sencillo que queremos hacer: un explorador de repositorios de una cuenta determinada de GitHub que permite listar un log de los commits recientes de cada repo.

Vemos un campo, ingresamos un nombre y vemos una lista de sus repositorios en GitHub. Si hacemos click en un repo, nos presenta una lista de los últimos commits.

En este paso, creamos nuestro entorno básico de desarrollo. Inicializamos el proyecto y creamos un `package.json`:

```
$ npm init -y
```

Instalamos algunas dependencias de la aplicación que siempre vamos a usar en casi todos los proyectos, y los salvamos a nuestro `package.json`:

```
$ npm install --save react react-dom
```

Instalamos algunas dependencias para el desarrollo de la aplicación que siempre vamos a usar en casi todos los proyectos, y también los salvamos a nuestro `package.json`:

```
$ npm install --save-dev babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-react webpack webpack-dev-server xhr babel-preset-react-hmre
```

* Creamos un .gitignore mínimo para que las dependencias instaladas no se guardan en el repositorio
* Creamos la vista en `index.html`
* Configuramos el webpack en `webpack.config.js
* Creamos un único componente App solo para arrancar nuestro desarrollo
* Arrancamos la aplicación con

```
$ npm start
```

* Cargar `http://localhost:8080/` en el navegador


