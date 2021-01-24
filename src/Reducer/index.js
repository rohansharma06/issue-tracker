import {
    FETCH_PROJECT,
    ADD_PROJECT
} from '../Actions/actionType';

const initialAuthState = {
    projects:[]
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
        default:
            return state;
    }
}