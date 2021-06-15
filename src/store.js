import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';


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

const reducers=(state=data,action)=>{
    switch(action.type){
        
        default:
            return state
        }
    }
    
const store=createStore(reducers,composeWithDevTools())

export default store;