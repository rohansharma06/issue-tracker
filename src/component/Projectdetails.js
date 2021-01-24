import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssueDetails from './IssueDetails';
import { addIsuue } from '../Actions';

class Projectdetails extends Component {
    constructor (){
        super()
        this.state = {
            title:'',
            description:'',
            label:'',
            author:'',
            sort:'none'
        }
    }

    handleInputChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    };

    handleAddIssue = () =>{
        let label = this.state.label.split(",");
        let obj = {
            title:this.state.title,
            description: this.state.description,
            label:label,
            author:this.state.author,
            number:this.props.displayProject.issue.length
        }
        this.props.dispatch(addIsuue(obj));
        
        // console.log(obj);
        this.setState({
            title:'',
            description:'',
            label:'',
            author:'',
            sort:'none'
        })
       
    }

    handleSort = (e) =>{
        this.setState({
            sort:e.target.value
          })
    }
    removeSort = () =>{
        this.setState({
            sort:'none'
          })
    }
    render() {
        const project = this.props.displayProject;
        const { sort } = this.state;
        // console.log(project);
        let issue = project.issue;
        if(sort === 'assending'){
            issue = project.issue.sort((a,b) => (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0));
        }else if(sort === 'desending'){
            issue = project.issue.sort((a,b) => (a.number < b.number) ? 1 : ((b.number < a.number) ? -1 : 0));
        }

        // console.log('yess:',x);
        return (
            <div className="container mt-10">
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{width:"18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title mb-5">Project Details</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{project.name}</h6>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                       
                        <button type="button" className="btn btn-dark mt-5" data-bs-toggle="modal" data-bs-target="#addissue">Add issue</button>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="mb-2">
                                <span className="p-2 text-primary" style={{fontSize:"15px"}}><b>Sort Issue No</b>:</span>
                                <select className="col-4 m-2" id="rating" name="cadort-rating" value={this.state.sort}  onChange={this.handleSort}>
                                    <option value="none">None</option>
                                    <option value="assending">Assending</option>
                                    <option value="desending">Desending</option>
                                </select>
                                {
                                    (this.state.sort === 'assending' || this.state.sort === 'desending') &&
                                    <button type="button" class="btn btn-danger" onClick={this.removeSort}>Remove</button>
                                }
                                
                            </div>
                        </div>
                        { issue.length > 0 ?
                            issue.map((issue,index) =>(
                                <IssueDetails issue ={issue} index={index} key={`issue-${index}`} />
                            )) : 
                            <div className="card mb-3">
                                <div className="card-body">
                                    No Issue!
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
                
                <div className="modal fade" id="addissue" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Issue</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Title" onChange={(e) => this.handleInputChange('title', e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" onChange={(e) => this.handleInputChange('description', e.target.value)}  required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Author" onChange={(e) => this.handleInputChange('author', e.target.value)} required />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Label (seperate lable by cooma (,) )" onChange={(e) => this.handleInputChange('label', e.target.value)} required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleAddIssue}>Add</button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      displayProject: state.displayProject
    }
  }
export default connect(mapStateToProps)(Projectdetails);