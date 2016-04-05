import xhr from 'xhr';

export const ADD_USER = 'ADD_USER';
export const LOAD_USER = 'LOAD_USER';
export const LOAD_REPOSITORY = 'LOAD_REPOSITORY';

const github = 'https://api.github.com/';

export const addUser = function(username) {
    return {
        type: ADD_USER,
        username: username
    };
};

export const loadUser = function(username) {
    return function(dispatch) {
        let url = github + 'users/' + username + '/repos';
        xhr.get(url, {json: true}, function(error, response, body) {
            dispatch({
                type: LOAD_USER,
                username: username,
                repositories: body
            });
        });
    };
};

export const loadRepository = function(username, repo) {
    return function(dispatch) {
        let url = 'https://api.github.com/repos/' + username + '/' + repo + '/commits';
        xhr.get(url, {json: true}, function(error, response, body) {
            dispatch({
                type: LOAD_REPOSITORY,
                username: username,
                repo: repo,
                commits: body
            });
        });
    };
};

