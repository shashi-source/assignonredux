import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// action....
export const newStudent=(student)=>{
    return{
        type:"ADDSTUDENT",
        payload:student
    }
}

// initial data..........
const data={
    data:[
    {
        "id":"01",
        "name":"shashi",
        "email":"shashi@gmail.com",
        "qualification":"MCA"
    },
    {
        "id":"02",
        "name":"Rohit",
        "email":"Rohit@gmail.com",
        "qualification":"BCA"
    }
]}

// reducers.........
const reducers=(state=data,action)=>{
    switch(action.type){
        case "ADDSTUDENT":{
            return{
                data:[action.payload,...state.data]
            }
        }
        default:
            return state
        }
    }
    
// create store 
const store=createStore(reducers,composeWithDevTools())

export default store;