import React from 'react';

var defaultGravatar = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y';

class MensajeCommit extends React.Component {
    render() {
        var avatar = this.props.commit.author ? this.props.commit.author.avatar_url : defaultGravatar,
        d = new Date(this.props.commit.commit.author.date);

        return (<li className="commit">
            <img src={avatar} width="50" height="50" />
            <h2 className="author">{this.props.commit.commit.author.name}</h2>
            <p className="message">{this.props.commit.commit.message}</p>
            <p className="date">{d.toTimeString()}</p>
        </li>);
    }
}

export default MensajeCommit;