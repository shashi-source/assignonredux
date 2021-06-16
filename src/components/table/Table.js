import React from 'react'
import Tabdata from './Tabdata'
import {useSelector} from 'react-redux'

const Table = () => {

    const stateData = useSelector(state => state.data.data)
    console.log(stateData)

    return (
        <div className="container">
            <div className="py-3">
            <table className="table shadow">
                <thead className="bg-tab-color text-white" >
                    <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Qualification</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stateData.map((ele,index)=><Tabdata index={index} ele={ele} key={ele.id}/>)}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
