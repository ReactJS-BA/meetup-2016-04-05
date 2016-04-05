import xhr from 'xhr';

export const LOAD_REPOSITORY = 'LOAD_REPOSITORY';

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

