import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 
import xhr from 'xhr';
import {LOAD_REPOSITORY} from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(function(state, action) {
    switch(action.type) {
        case LOAD_REPOSITORY:
            let newState = Object.assign({}, state);
            if(!newState[action.username])
                newState[action.username] = {};
            newState[action.username][action.repo] = action.commits;
            return newState;
        
        default:
            return state
    }
}, {});

export default store;
