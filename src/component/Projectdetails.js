import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projectdetails extends Component {
    render() {
        return (
            <div>
                Details
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        displayProject: state.displayProject,
    }
}
export default connect(mapStateToProps)(Projectdetails);