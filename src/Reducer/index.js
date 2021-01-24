import {
    ADD_PROJECT
} from '../Actions/actionType';

const initialAuthState = {
    projects : [
        {
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
        },
        {
            name:"Nodejs-Authentication",
            description:"A complete authentication system which can be used as a starter code for creating any new application.",
            author:"Rohan Sharma 2",
            issue: []
        },
        {
            name:"House-let",
            description:"One-stop where you can search house as well as search for Tenant.",
            author:"Rohan Sharma 3",
            issue: []
        },
        {
            name:"Facebook-clone",
            description:"A Facebook clone made using React.",
            author:"Rohan Sharma 4",
            issue: [
                {
                    title:'bug',
                    description:'invalid data',
                    label:['error'],
                    author:'Admin 1',
                }
            ]
        }
    ],
}

export default function auth(state = initialAuthState, action){
    switch(action.type){
        case ADD_PROJECT:
            // let obj = {
            //     name: action.name
            // }
            // console.log(obj);
            return{
                ...state,
                projects: [...state.projects,{name:action.name,description:action.description,author:action.author,issue:[]}]
            }
        default:
            return state;
    }
}