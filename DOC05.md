## DOC05 05 Dando estilo a la app con Material-UI

Instalar Material-UI 

* En este paso vamos a darle un poco más de vida y estilo a nuestra app utilizando los componentes de Material-UI. Se requieren las siguientes dependencias:

```
"material-ui": "^0.15.0-beta.1"
"react-tap-event-plugin": "^1.0.0"
```

* Para instalar Material-UI, realizar en 'app.js' las siguientes importaciones:

```
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
```

* Para modificar el theme de Material UI (por ejemplo, cambiar los colores) debemos utilizar 'getMuiTheme' para crear nuestro estilo y establecer el contexto. Posteriormente 'MuiThemeProvider' servirá para aplicar dichos estilos a nuestros componentes.

* Posteriormente, simplemente crean la paleta de colores y se importa cada componente de MUI para renderizarlo. Por ejemplo:

```
import React from 'react';
import {render} from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {grey800} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey800
  }
});

class App extends React.Component {
    render() {
        return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppBar title="Explorador de Repos de GitHub!" />
                </MuiThemeProvider>
        )
    }
};
```

* Para entender más y sacarle provecho a Material-UI, te recomiendo leer toda la documentación:
http://www.material-ui.com/v0.15.0-alpha.1/ 
