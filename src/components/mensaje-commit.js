import React from 'react';

var defaultGravatar = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y';

class MensajeCommit extends React.Component {
    render() {
        var avatar = defaultGravatar;

        return (<li className="commit">
            <img src={avatar} width="50" height="50" />
            <h2 className="author">Victor Kane</h2>
            <p className="message">Commit típico</p>
            <p className="date">2015-10-12T17:32:52Z</p>
        </li>);
    }
}

export default MensajeCommit;