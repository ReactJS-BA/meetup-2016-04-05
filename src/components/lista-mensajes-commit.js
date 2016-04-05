import React from 'react';
import store from '../store/store';
import {loadRepository} from '../store/actions';
import MensajeCommit from './mensaje-commit';

class ListaMensajesCommit extends React.Component {
    constructor(props) {
        super(props);

        let data = store.getState(),
            commits;
        
        if(data[this.props.username])
            commits = data[this.props.username][this.props.repo]; 

        this.state = {history: commits ? commits : []};
        this.updateRepo = this.updateRepo.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.updateRepo);
        store.dispatch(loadRepository(this.props.username, this.props.repo));
    }

    componentWillReceiveProps(newProps) {
        store.dispatch(loadRepository(newProps.username, newProps.repo));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    updateRepo(history) {
        let data = store.getState(),
            commits;

        if(data[this.props.username])
            commits = data[this.props.username][this.props.repo];
        
        this.setState({history: commits ? commits : []});
    }

    render() {
        return <ul className="repository">
            {this.state.history.map(function(commit, i) {
                return <MensajeCommit commit={commit} key={i} />;
            })}
        </ul>;
    }
};

export default ListaMensajesCommit;