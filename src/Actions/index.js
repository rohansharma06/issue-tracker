import {
    ADD_PROJECT
} from './actionType';

export function addProject(name,description,author){
    // document.getElementById('exampleModal').modal('hide');
    return {
        type: ADD_PROJECT,
        name,
        description,
        author
    }
}