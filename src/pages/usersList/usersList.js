import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeContext";
import SwitchButton from "../../button";


export const UsersList = ({data}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className={`users_container bg ${darkMode ? "bg-dark" : "bg-light"}`}>
            <SwitchButton/> 
            <h1 style={{textAlign: 'center'}} className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>Users List</h1>
        <table className={`table heading ${darkMode ? "heading-dark" : "heading-light"}`}>
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
                            <table className={`table heading ${darkMode ? "heading-dark" : "heading-light"}`}>
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