import React from 'react'
import '../../styles/form.scss'
import Navbar from './Navbar'

const Editform = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex-container">
                <div className="flex-box">
                <div className="form-header">
                    <h3>Edit Student form</h3>
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

export default Editform
