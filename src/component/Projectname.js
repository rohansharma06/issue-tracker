import React, { Component } from 'react';

class Projectname extends Component {
    constructor(){
        super()
    }
    render() {
        const { name,index } = this.props;
        // console.log('yae:',index);
        return (
            (index === 0)?
            <a className="list-group-item list-group-item-action active" id={`list-book-${index}`} data-bs-toggle="list" href={`#book-${index}`} role="tab" aria-controls="home">{name}</a>:
            <a className="list-group-item list-group-item-action" id={`list-book-${index}`} data-bs-toggle="list" href={`#book-${index}`} role="tab" aria-controls="home">{name}</a>
        );
    }
}

export default Projectname;