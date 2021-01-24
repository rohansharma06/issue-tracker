import React, { Component } from 'react';

class Issue extends Component {
    render() {
        const {name} = this.props;
        return (
            <span className="badge bg-danger m-2">{name}</span>
        );
    }
}

export default Issue;