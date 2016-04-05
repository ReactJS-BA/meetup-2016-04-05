import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import xhr from 'xhr';
import {ADD_USER, LOAD_USER, LOAD_REPOSITORY} from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(function(state, action) {
    let newState = Object.assign({}, state);
    
    switch(action.type) {
        case ADD_USER:
            if(!newState[action.username])
                newState[action.username] = {};
            return newState;

        case LOAD_USER:
            action.repositories.forEach(function(repository) {
                newState[action.username][repository.name] = repository;
            });
            return newState;

        case LOAD_REPOSITORY:
            newState[action.username][action.repo] = action.commits;
            return newState;
        
        default:
            return state
    }
}, {});

export default store;
