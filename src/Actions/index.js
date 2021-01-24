import {
    FETCH_PROJECT,
    ADD_PROJECT
} from './actionType';
import { projects } from '../Data/project';

export function fetchProject(){
    if(localStorage.getItem('projects')){
        let data = localStorage.getItem('projects');
        return {
            type: FETCH_PROJECT,
            projects:JSON.parse(data)
        }
    }else{
        localStorage.setItem('projects', JSON.stringify(projects));
        return {
            type: FETCH_PROJECT,
            projects
        }
    }
}

export function addProject(name,description,author){
    let data = JSON.parse(localStorage.getItem('projects'));
    let obj = {'name':name,'description':description,'author':author,'issue':[]};
    data.push(obj);
    localStorage.setItem('projects', JSON.stringify(data));
    return {
        type: ADD_PROJECT,
        name,
        description,
        author
    }
}