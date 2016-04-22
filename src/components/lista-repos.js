import React from 'react';
import {Component} from 'react';

/* Store / Actions */
import store from '../store/store';
import {addUser, loadUser} from '../store/actions';

/* Import Components */
import LinkRepo from './link-repo';

/* Material-UI Components */
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class ListaRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {repositories: []};
        this.updateList = this.updateList.bind(this);
    }

    componentDidMount() {
        store.dispatch(addUser(this.props.params.username));
        this.unsubscribe = store.subscribe(this.updateList);
        store.dispatch(loadUser(this.props.params.username));
    }

    componentWillReceiveProps(newProps) {
        store.dispatch(addUser(newProps.params.username));
        store.dispatch(loadUser(newProps.params.username));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    updateList() {
        let user = store.getState()[this.props.params.username],
            repositories = [];

        Object.keys(user).forEach(function(key, i) {
            repositories.push(Object.assign({}, user[key]));
        });

        this.setState({
            repositories: repositories
        });
    }

    render() {
        return (
            <List style={{ marginTop: 50 }}>
                <Subheader>Repositorios a los cuales contribuyó <strong>@{this.props.params.username}</strong></Subheader>
                {this.state.repositories.map(function(repo, i) {
                    return <LinkRepo repo={repo} key={i} />;
                })}
            </List>
        );
    }
}


export default ListaRepos;