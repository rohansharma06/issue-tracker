import React, { Component } from 'react';
import Issue from './Issue';

class IssueDetails extends Component {
    render() {
        const {issue} = this.props;
        // console.log(issue.label);
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title"><small className="text-info">Title: </small> {issue.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{issue.author}</h6>
                    <p className="card-text">{issue.description}</p>
                    {issue.label.length >0 &&
                        issue.label.map((issue,index) =>(
                            <Issue name ={issue} index={index} key={`issue-${index}`}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default IssueDetails;