import { useState } from "react";
import { Link } from "react-router-dom";


export const UsersList = ({data}) => {
    return(
        <div className={"users_container"}>
            <h1 style={{textAlign: 'center'}}>Users List</h1>
        <table  className={"table"}>
              <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              </tr>
        </table>
            {
                data.map((i) => {
                    return(
                        <div>
                            <table className={"table"}>
                                <tr>
                                    <Link to={`/userDetails/${i.id}`}>
                                    <td>{i.name}</td>
                                    </Link>
                                    <td>{i.email}</td>
                                    <td>{i.gender}</td>
                                    <td>{i.status}</td>
                                </tr>
                            </table>
                        </div>
                    )
                })
            }   
        </div>
    )
}