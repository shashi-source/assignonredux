import React from 'react'
import { Link } from 'react-router-dom';
import {delStudent} from '../../action/newStudent'
import { useDispatch } from 'react-redux';

const Tabdata = ({ele,index}) => {

    const dispatch = useDispatch();

    const {id,name,email,qualification}=ele;
    return (
            <tr>
                    <th scope="row">{index+1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{qualification}</td>
                    <td>
                        <Link to={`/editform/${id}`}><span className="material-icons">edit</span></Link>
                        
                        <span className="material-icons text-danger" onClick={()=>dispatch(delStudent(id))}>remove_circle</span>
                        
                    </td>
            </tr> 
            )
}

export default Tabdata
