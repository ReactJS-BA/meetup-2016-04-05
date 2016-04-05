import React from 'react';
import {render} from 'react-dom';
import ListaMensajesCommit from './components/lista-mensajes-commit';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="container">
            <h2>Bienvenidos al Explorador de Repos de GitHub</h2>
            <input type="text" placeholder="awebfactory/react-starter" />
            <ListaMensajesCommit />
        </div>;
    }
};

render(<App />, document.getElementById('app'));
