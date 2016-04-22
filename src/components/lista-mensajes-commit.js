import React from 'react';
import {Component} from 'react';

/* Store / Actions */
import store from '../store/store';
import {addUser, loadRepository} from '../store/actions';

/* Import Components */
import MensajeCommit from './mensaje-commit';

/* Material-UI Components */
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';


class ListaMensajesCommit extends Component {
    constructor(props) {
        super(props);
        this.state = {history: []};
        this.updateRepo = this.updateRepo.bind(this);
    }

    componentDidMount() {
        store.dispatch(addUser(this.props.params.username));
        this.unsubscribe = store.subscribe(this.updateRepo);
        store.dispatch(loadRepository(this.props.params.username, this.props.params.repository));
    }

    componentWillReceiveProps(newProps) {
        store.dispatch(loadRepository(newProps.params.username, newProps.params.repository));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    updateRepo(history) {
        let data = store.getState()[this.props.params.username];
        if(data[this.props.params.repository])
            data = data[this.props.params.repository];
        else
            data = [];

        this.setState({history: [].concat(data)});
    }

    render() {
        return (
            <List style={{ marginTop: 50 }}>
                <Subheader>Mostrando <u>commits recientes</u> en <strong>{this.props.params.username}/{this.props.params.repository}</strong></Subheader>
                {this.state.history.map(function(commit, i) {
                        return <MensajeCommit commit={commit} key={i} />;
                })}
            </List>
                );
    }
};

export default ListaMensajesCommit;