import React from 'react';
import {Component} from 'react';

/* Material-UI Components */
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import {darkBlack} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

var defaultGravatar = 'http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y';

class MensajeCommit extends Component {
    render() {
        var avatar = this.props.commit.author ? this.props.commit.author.avatar_url : defaultGravatar,
        d = new Date(this.props.commit.commit.author.date);

        return (
            <ListItem
                leftAvatar={<Avatar src={avatar} />}
                primaryText={this.props.commit.commit.author.name}
                secondaryText={ 
                                <p><span style={{color: darkBlack }}>{this.props.commit.commit.message}</span>
                                <br/>
                                {d.toTimeString()}</p>

                            }
                secondaryTextLines={2}
            />
        );
    }
}

export default MensajeCommit;