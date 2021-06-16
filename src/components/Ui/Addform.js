import React,{useState} from 'react'
import Navbar from './Navbar'
import '../../styles/form.scss'
import { useDispatch } from 'react-redux'
import {newStudent} from '../../action/newStudent'
import shortid from 'shortid'
import { useHistory } from 'react-router'

const Addform = () => {
    //history method
    const history=useHistory(); 
    // dispatch method
     const dispatch = useDispatch();
    // state...
    const [values,setValue]=useState({
        id:shortid.generate(),
        name:"",
        email:"",
        qualification:"",
        date:new Date().toDateString()
    })    // vaildation state
    const [vaild,setVaild]=useState(false)
    
    // submit state
    const [submitted,setsubmitted]=useState(false)

    // Event handle.....
    const stdName=(event)=>{
        setValue({...values,name:event.target.value})
    }
    const stdEmail=(event)=>{
        setValue({...values,email:event.target.value})
    }
    const stdQualification=(event)=>{
        setValue({...values,qualification:event.target.value})
    }

    // submit handler
    const handleSubmit=(event)=>{
        event.preventDefault();
        // setValue({...values,date:new Date().toDateString()})
        console.log(values)
        if(!values.name || !values.email.includes("@") || !values.email.includes(".")){
            setVaild(true)
        }
        setsubmitted(true)
        dispatch(newStudent(values));
        history.push("/")
    }
    // reset handler
    const handleReset=(event)=>{
        event.preventDefault();
       setValue({name:"",email:"",qualification:""})
    }   

    return (
        <div>
            <Navbar/>
            <div className="flex-container">
                <div className="flex-box">
                <div className="form-header">
                    <h3>Add Student form</h3>
                    <label><span>&times;</span></label>
                </div>
                <div>
                    {submitted && vaild ?<p style={{color:"red"}}>please enter the vaild name</p>:""}
                    {submitted && vaild?<p style={{color:"red"}}>please enter vaild email with @ and .</p>:""}   
                </div>
                <div className="form-item">
                    <label className="label-text">Name</label>
                    <input type="text" placeholder="Enter Name" value={values.name} onChange={stdName}/>
                </div>
                <div className="form-item">
                    <label className="label-text">Email</label>
                    <input type="email" placeholder="Enter Email" value={values.email} onChange={stdEmail}/>
                </div>
                <div className="form-item">
                    <label className="label-text">Qualification</label>
                    <input type="text" placeholder="Enter Qualification" value={values.qualification} onChange={stdQualification}/>
                </div>
                <div className="form-item action">
                    <button type="submit" id="btn-submit" onClick={handleSubmit} >Submit</button>
                    <button type="reset" id="btn-reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Addform

















/*
<div className="form-item">
<label className="label-text">Qualification</label>
<select className="select-tag">
<option>Please choose</option>
<option value="BCA">BCA</option>
<option value="B.Tech">B.Tech</option>
<option value="MCA">MCA</option>
</select>
</div>
*/
