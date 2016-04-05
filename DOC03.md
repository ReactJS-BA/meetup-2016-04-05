## Doc03 paso03 listar mensajes con redux realmente

Primero agregamos más dependencias

```
npm install -S redux redux-thunk
```

Agregar acciones, reducer + store siguiendo el paradigma flux con la implementación redux, en ./store

* Modificar App para que soporta interacción del usuario, y para que pase el resultado del repo ingresado en el campo input a ListaMensajesCommit como props.
* Conectar ListaMensajesCommit al store de Redux
    * suscribir al store en componentDidMount
    * registrar una acción de búsqueda al store con dispatch
        * en componentDidMount
        * en componentWillReceiveProps (nuevo repo)
* Paremetrizar a MensajeCommit
* Agregar acciones
* Agregar store y reducer con middleware asíncrono




