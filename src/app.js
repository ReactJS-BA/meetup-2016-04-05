import React from 'react';
import {render} from 'react-dom';
import {Link, Router, Route, browserHistory} from 'react-router';

/* Components */
import ListaRepos from './components/lista-repos';
import ListaMensajesCommit from './components/lista-mensajes-commit';

/* Materia-UI Settings */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey800, orange800} from 'material-ui/styles/colors';
/* Material-UI Components */
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';

/* Inject Material-UI */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/* Material-UI Customization */
const muiTheme = getMuiTheme({
  palette: {
    /* More colors: http://www.material-ui.com/#/customization/colors */
    primary1Color: grey800,
    accent1Color: orange800
  }
});

/* ! APP ! */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    handleSubmit(e) {
        e.preventDefault();
        let username = this.refs.myInput.getValue();
        browserHistory.push('/' + username);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={{height: '100%'}}>
                    <Link to="/">
                        <AppBar style={{textAlign: 'center'}} title="Explorador de Repos de GitHub!" 
                        />
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center" style={{ marginTop: 50 }}>
                                <p>
                                    Ingresar a continuación el nombre de usuario de <strong>GitHub</strong> de quien deseas buscar los repositorios a los cuales contribuyó.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                <Card style={{ marginTop: 50, padding: '5px 25px' }}>
                                    <form method="get" action="/" onSubmit={this.handleSubmit}>
                                        <TextField
                                            ref="myInput"
                                            hintText="@username de GitHub"
                                            fullWidth={true}
                                        />
                                    </form>
                                </Card>
                            </div>
                            <div className="col-md-2">
                                <RaisedButton 
                                    onClick={this.handleSubmit}
                                    style={{ marginTop: 50, height: '58px', width: '150px' }}
                                    label="Buscar" 
                                    secondary={true} 
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: 200 }}>
                            <div className="col-md-12">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p>OPEN SOURCE</p>
                                    <a href="https://github.com/ReactJS-BA/meetup-2016-04-05">Ver repositorio en GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

/* Rendering */
render((
    /* Router Config */
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path=":username" component={ListaRepos} />
            <Route path=":username/:repository" component={ListaMensajesCommit} />
        </Route>
    </Router>
), document.getElementById('app'));

