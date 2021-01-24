import {
    FETCH_PROJECT,
    ADD_PROJECT,
    VIEW_PROJECT_DETAILS,
    VIEW_HOME_PAGE,
    ADD_ISSUE
} from '../Actions/actionType';

const initialAuthState = {
    projects:[],
    showHome: true,
    displayProject:{}
}

export default function auth(state = initialAuthState, action){
    switch(action.type){
        case FETCH_PROJECT:
            console.log('yaee:',action.projects);
            return {
                ...state,
                projects: [...action.projects]
            }
        case ADD_PROJECT:
            return{
                ...state,
                projects: [...state.projects,{name:action.name,description:action.description,author:action.author,issue:[]}]
            }
        case VIEW_PROJECT_DETAILS:
            return {
                ...state,
                showHome: false,
                displayProject: action.project
            }
        case VIEW_HOME_PAGE:
            return {
                ...state,
                showHome: true,
                displayProject: {}
            }
        case ADD_ISSUE:
            let data = state.displayProject;
            data.issue.push(action.data);
            let allproject = JSON.parse(localStorage.getItem('projects'));
            allproject.find(project => project.name === data.name).issue.push(action.data);
            localStorage.setItem('projects', JSON.stringify(allproject));
            return {
                ...state,
                showHome:false,
                displayProject:data
            }
        default:
            return state;
    }
}