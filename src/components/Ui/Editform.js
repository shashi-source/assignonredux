import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import '../../styles/form.scss'
import { useDispatch,useSelector } from 'react-redux'
import {getId,updatestudent} from '../../action/newStudent'
import shortid from 'shortid'
import { useHistory } from 'react-router'
import { useParams } from 'react-router'

const Editform = () => {
    // params method to get id
    const {id}=useParams();
    // alert(id)
    //history method
    const history=useHistory(); 
    // dispatch method
     const dispatch = useDispatch();
    // select state 
    const stateData = useSelector(state => state.data.stddata)
    // console.log(stateData)

     // state...
    const [values,setValue]=useState({
        id:shortid.generate(),
        name:"",
        email:"",
        qualification:"",
        date:new Date().toDateString()
    })  
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

    // update handler
    const onupdateStudent=(event)=>{
        event.preventDefault();
        // console.log(values)
        const updateStd=Object.assign(stateData,values)
        console.log(updateStd)
        dispatch(updatestudent(updateStd));
        history.push("/");
    }
   

    // reset handler
    const handleReset=(event)=>{
        event.preventDefault();
       setValue({name:"",email:"",qualification:""})
    }   

    //useEffect method
    useEffect(()=>{
        if(stateData !=null){
            setValue({name:stateData.name,email:stateData.email,qualification:stateData.qualification})
        }
        dispatch(getId(id))
    },[stateData]) 




    return (
        <div>
            <Navbar/>
            <div className="flex-container">
                <div className="flex-box">
                <div className="form-header">
                    <h3>Edit Student form</h3>
                    <label><span>&times;</span></label>
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
                    <button type="submit" id="btn-submit" onClick={(e)=>onupdateStudent(e)} >Submit</button>
                    <button type="reset" id="btn-reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Editform

















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
