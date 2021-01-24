import React,{Component} from 'react';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import Navbar from './Navbar';
import { fetchProject } from '../Actions'

class App extends Component {

  componentDidMount(){
    //API call can be perform here
    //---- dispatch action
    this.props.dispatch(fetchProject());
  }
  
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


