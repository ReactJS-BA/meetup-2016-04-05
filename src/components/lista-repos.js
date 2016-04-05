import React from 'react';
import store from '../store/store';
import {addUser, loadUser} from '../store/actions';
import LinkRepo from './link-repo';


class ListaRepos extends React.Component {
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
        return (<div id="repository-list">
            <h1>Mostrando Repositorios a los cuales contribuye {this.props.params.username} </h1>
            {this.state.repositories.map(function(repo, i) {
                return <LinkRepo repo={repo} key={i} />;
            })}
        </div>);
    }
}


export default ListaRepos;