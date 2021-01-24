import {
    FETCH_PROJECT,
    ADD_PROJECT,
    VIEW_PROJECT_DETAILS,
    VIEW_HOME_PAGE
} from '../Actions/actionType';

const initialAuthState = {
    projects:[],
    showHome: false,
    displayProject:{
        name:"Hospital-API",
        description:"Basic API to keep track and generate reports of patients in Covid-19 time.",
        author:"Rohan Sharma",
        issue: [
            {
                title:'bug',
                description:'invalid data',
                label:['error'],
                author:'Admin 1',
            },
            {
                title:'bug2',
                description:'invalid data',
                label:['error'],
                author:'Admin 1',
            }
        ]
    }
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
        default:
            return state;
    }
}