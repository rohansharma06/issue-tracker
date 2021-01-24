import React, { Component } from 'react';
import { viewHome } from '../Actions';

class Navbar extends Component {
    
    handleHeaderClick = () => {
        this.props.dispatch(viewHome());
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={this.handleHeaderClick} style={{cursor:'pointer'}}>
                            <img src='https://cdn.onlinewebfonts.com/svg/img_185196.png' alt="" width="30" height="30" className="d-inline-block align-top bg-white" />
                            <span style={{marginLeft:"10px"}}>Issue Tracker</span>
                        </a>
                    </div>
                </nav>
            </div>
            
        );
    }
}

export default Navbar;