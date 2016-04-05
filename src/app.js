import React from 'react';
import {render} from 'react-dom';
import ListaMensajesCommit from './components/lista-mensajes-commit';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: 'ReactJS-BA', repo: 'meetup-2016-04-05'};
        this.handleKeyEvent = this.handleKeyEvent.bind(this);
    }

    handleKeyEvent(e) {
        if(e.key !== 'Enter')
            return;

        var data = this.refs.input.value.split('/');
        if(data.length !== 2)
            return alert('Bad input.');

        this.setState({
            username: data[0],
            repo: data[1]
        });
    }

    render() {
        return <div className="container">
            <h2>Bienvenidos al Explorador de Repos de GitHub</h2>
            <input type="text" ref="input" placeholder={this.state.username + "/" + this.state.repo} onKeyUp={this.handleKeyEvent} />
            <ListaMensajesCommit  username={this.state.username} repo={this.state.repo}/>
        </div>;
    }
};

render(<App />, document.getElementById('app'));
