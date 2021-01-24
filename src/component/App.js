import React,{Component} from 'react';
import { connect } from 'react-redux';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Projectdetails from './Projectdetails';
import { fetchProject } from '../Actions'

class App extends Component {

  componentDidMount(){
    //API call can be perform here
    //---- dispatch action
    this.props.dispatch(fetchProject());
  }
  
  render(){
    const {projects, showHome} = this.props;
    return(
      <div>
        <Navbar dispatch={this.props.dispatch} />
        {
          (showHome)?
          <Homepage projects={projects} dispatch={this.props.dispatch}/>
          :
          <Projectdetails dispatch={this.props.dispatch} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    showHome: state.showHome
  }
}
export default connect(mapStateToProps)(App);


