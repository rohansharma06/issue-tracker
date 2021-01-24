import React, { Component } from 'react';
import Projectname from './Projectname';
import Projectinfo from './Projectinfo';
import { addProject } from '../Actions';

class Homepage extends Component {
    constructor(){
        super()
        this.state= {
            name:'',
            description:'',
            author:''
        }
    }

    handleInputChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    };

    handleAddButtonClick = () =>{
        const { name, description, author } = this.state;
        
        console.log(name,description,author);
        if(!name || !description || !author){
            alert('Invalid Field')
        }else{
            this.props.dispatch(addProject(name,description,author));
        }
    }
    render() {
        const {projects} = this.props;
        
        return (
            <div>
                <div className="container-header">
                    <span className="my-header">My Projects</span>
                </div>
                <div className="container project-container">
                    <div className="row">
                        <div className="col-4">
                            <div className="list-group" id="list-tab" role="tablist">
                                {
                                    projects.map((project,index) =>(
                                        <Projectname name ={project.name} index={index} key={`project-${index}`}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="tab-content" id="nav-tabContent">
                                {
                                    projects.map((project,index) =>(
                                        <Projectinfo project ={project} index={index} key={`project-${index}`} dispatch={this.props.dispatch} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"10px"}} className="container">
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Add project</button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            {/* <div className="alert error-dailog">message</div> */}
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Project name" value={this.state.name} onChange={(e) => this.handleInputChange('name', e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Project description" onChange={(e) => this.handleInputChange('description', e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Project author" onChange={(e) => this.handleInputChange('author', e.target.value)} required />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleAddButtonClick}>Add</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default Homepage;