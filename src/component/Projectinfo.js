import React, { Component } from 'react';
import Issue from './Issue';

class Projectinfo extends Component {
    render() {
        const { project,index } = this.props;
        // console.log(project.issue);
        return (
            (index === 0)?
            (
                <div className="tab-pane fade show active" id={`book-${index}`} role="tabpanel" aria-labelledby={`list-book-${index}`}>
                    <p>{project.description}</p>
                    <p><b>Author</b>: {project.author}</p>
                    {project.issue.length >0  &&
                        <p>
                            <b>Issue</b>
                            {
                                project.issue.map((issue,index) =>(
                                    <Issue name ={issue.title} index={index} key={`issue-${index}`}/>
                                ))
                            }
                        </p>
                    }
                    <button type="button" className="btn btn-secondary">View</button>
                </div>
            ):(
                <div className="tab-pane fade show" id={`book-${index}`} role="tabpanel" aria-labelledby={`list-book-${index}`}>
                    <p>{project.description}</p>
                    <p><b>Author</b>: {project.author}</p>
                    {project.issue.length >0  &&
                        <p>
                            <b>Issue</b>
                            {
                                project.issue.map((issue,index) =>(
                                    <Issue name ={issue.title} index={index} key={`issue-${index}`}/>
                                ))
                            }
                        </p>
                    }
                    <button type="button" className="btn btn-secondary">View</button>
                </div>
            )

        );
    }
}

export default Projectinfo;