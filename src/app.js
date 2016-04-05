import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import ListaRepos from './components/lista-repos';
import ListaMensajesCommit from './components/lista-mensajes-commit';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getChildContext() {
        return {params: this.props.params};
    }

    handleSubmit(e) {
        e.preventDefault();
        let username = this.refs.input.value;
        browserHistory.push('/' + username);
    }

    render() {
        return <div className="container">
            <h2>Bienvenidos al Explorador de Repos de GitHub</h2>
            <form method="get" action="/" onSubmit={this.handleSubmit}>
                <input type="text" ref="input" placeholder="Ingresar un usuario de GitHub y apretar enter" />
            </form>
            {this.props.children}
        </div>;
    }
};

App.childContextTypes = {params: React.PropTypes.object};

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path=":username" component={ListaRepos} />
            <Route path=":username/:repository" component={ListaMensajesCommit} />
        </Route>
    </Router>
), document.getElementById('app'));
