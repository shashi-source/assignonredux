import React from 'react'
import { Link } from 'react-router-dom';

const Tabdata = ({ele,index}) => {
    const {name,email,qualification}=ele;
    return (
            <tr>
                    <th scope="row">{index+1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{qualification}</td>
                    <td>
                        <Link to="/editform"><span className="material-icons">edit</span></Link>
                        <Link to="/">
                            <span className="material-icons text-danger">remove_circle</span>
                        </Link>
                    </td>
            </tr> 
            )
}

export default Tabdata
