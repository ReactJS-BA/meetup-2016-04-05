# meetup-2016-04-05

## "El camino para dominar reactjs" (sin fatigarse en el intento).

[Victor Kane](https://github.com/victorkane), [AWebFactory](https://github.com/awebfactory)

### Sobre mí (Victor Kane)

Soy Ingeniero del proceso de desarrollo y de la arquitectura del software desde los años 90. En la última década con dedicación exclusiva a las aplicaciones y portales web. Inicialmente con Java y el framework Spring, luego Ruby on Rails, luego PhP y Drupal, luego full stack Javascript (desde 2010 con Nodejs y Backbone).

Me dedico al mentoring y al entrenamiento, para la adquisición de un enfoque lean y ágil dentro de organizaciones y compañías que desean desarrollar aplicaciones web utilizando versiones estables de las herramientas más modernas y capaces de soportar las exigencias crecientes de los modelos de negocio de hoy.

Por eso, he trabajado con los mejores frameworks y entornos, en base de las mejores prácticas y herramientas disponibles como AWebFactory.com.

He vivido en Buenos Aires, Argentina durante los últimos 40 años con estadías significativas también en Los Angeles, California. 

### Beneficios de React

Se asume que los que estamos aquí ya conocemos bien los beneficios que nos da la utilización de React, probablemente integrada 

* Performance con DOM Virtual
* Flujo unidireccional de datos y eventos a través de una jerarquía de componentes modulares con punto único de entrada (programación reactiva)
    * Binding unidireccional entre el view (vista) y modelo, se evita complejidad y explosión de eventos dificiles para debugging.
* Se usa realmente por sus creadores
* Se integra directamente con implmmentaciones del paradigma también reactivo de gestión de datos Flux (como Redux) que maneja los datos de la aplicación en una división también jerárquica de componentes contenedores vinculados al estado de los datos en el store, y que pasan estos datos y funciones gestores de esos datos a componentes puros que demuestran los datos en forma predicible sin efectos secundarios y ofrecen puntos de interacción al usuario.
* Es fácil incluir rendering (proyección del componente en el DOM virtual como nodos de elementos con estilo y comportamiento, o sea HTML + CSS + JavaScript) en el lado del servidor con funciones sencillas, para lograr las llamadas aplicaciones universales (antes se llamaban isomórficas).
* Tal vez no dura para siempre, pero estamos convencidos de que las cosas se van a hacer así en el futuro también por más que no sea con React en sí (por ejemplo, [Elm](http://elm-lang.org/)).

### Fatiga con React

Ya nos está cansando la cabeza un poquito al solo escuchar eso. Es por la complejidad de los requerimientos de hoy día, no es culpa de React Pero, ¿cómo abordarlo?

* ["Aprender React me llena de tristeza"](https://cdn.rawgit.com/gaearon/react-makes-you-sad/1377b6a6cdc644adfea6bf238f06c75d33ed6f1e/fatigue.svg)
* [react-howto](https://github.com/petehunt/react-howto)


De aquí se desprende que el camino ha de simplificarse, para tomar pasos de bebe:

* Entender como analizar una SPA (aplicación de una sola página) y someterlo a una desestructuración en sus partes, una jerarquía (como el DOM mismo) de componentes con [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html). Artículo viejo pero magistral que sin lugar a dudas es el punto de partida.
* Aprender React y JSX (lenguaje tipo XML que define el DOM virtual del componente) con algún tutorial sencillo del tipo que podés ejecutar todo en Codepen o JSBin
* Aprender algo de Node.js y su gestor de paquetes npm
* Aprender los "bundlers" (herramientas de concatenación automáticas que permiten escribir modularmente pero consumir eficazmente su código)
* Aprender ES6
* Aprender Flux
* Aprender estilos CSS inline (recientemente descubrí a [Radium](https://github.com/FormidableLabs/radium)) o modular  
* Aprender rendering en el lado del servidor para lograr aplicaciones "universales" y amigables para SEO.
* Aprender Immutable.js (menos bugs, mejor performance con el manejo de los datos en React).
* Aprender Relay, Falcor, ....

y agregaría,

* Alistarse en un año más o menos para ir a Typescript en vez de ES6. 

### Entonces, ¡hagamoslo ahora mismo!

Vemos rápidamente (pero quedamos con el repositorio y con el video) como sería seguir estos pasos en una aplicación sencilla paso a paso.





