import React from 'react'
import Navbar from './Navbar'
import '../../styles/form.scss'

const Addform = () => {
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
                    {/* <p>nameError</p>
                    <p>nameError</p> */}
                </div>
                <div className="form-item">
                    <label className="label-text">Name</label>
                    <input type="text" placeholder="Enter Name"/>
                </div>
                <div className="form-item">
                    <label className="label-text">Email</label>
                    <input type="email" placeholder="Enter Email"/>
                </div>
                <div className="form-item">
                    <label className="label-text">Qualification</label>
                    <input type="text" placeholder="Enter Qualification"/>
                </div>
                <div className="form-item action">
                    <button type="submit" id="btn-submit" >Submit</button>
                    <button type="reset" id="btn-reset">Reset</button>
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
