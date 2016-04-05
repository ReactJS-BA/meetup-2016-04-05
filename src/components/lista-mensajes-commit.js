import React from 'react';
import MensajeCommit from './mensaje-commit';

class ListaMensajesCommit extends React.Component {
    render() {
        return <ul className="repository">
            <MensajeCommit />
            <MensajeCommit />
            <MensajeCommit />
        </ul>;
    }
};

export default ListaMensajesCommit;