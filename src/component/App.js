import React,{Component} from 'react';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import Navbar from './Navbar';

class App extends Component {
  render(){
    const {projects} = this.props;
    return(
      <div>
        <Navbar />
        <Homepage projects={projects} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
  }
}
export default connect(mapStateToProps)(App);


