import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';

/* Material-UI Components */
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

class LinkRepo extends Component {
    render() {
        let url = this.props.repo.owner.login + '/' + this.props.repo.name;
        return (
                <Link to={url}>
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    primaryText={url}
                    secondaryText={this.props.repo.description}
                />
                </Link>
        );
    }
};


export default LinkRepo;