import {
    FETCH_PROJECT,
    ADD_PROJECT,
    VIEW_PROJECT_DETAILS,
    VIEW_HOME_PAGE
} from './actionType';
import { projects } from '../Data/project';


// fetch all project info
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

// add new project
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

// view selected project info
export function viewProject(project){
    return {
        type: VIEW_PROJECT_DETAILS,
        project
    }
}

// view home page
export function viewHome(){
    return {
        type: VIEW_HOME_PAGE
    }
}