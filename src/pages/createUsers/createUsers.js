import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CreateUsers = ({data, setData}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const handleAddNew = (e) => {
        setData([...data, {id: Math.random(), name: name, email: email, gender: gender},]);
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDelete = () => {
        setData([])
    }

    const handleRemove = (id) => {
        let arr = data.filter((i) => i.id !== id);
        setData(arr)
    }

    const handleReturnDeleted = () => {
        setData(data)
    }

    console.log(data)
    
    return(
        <div className='users_container'>
            <h1 style={{textAlign: 'center'}}>Admin Panel</h1>
            <form onSubmit={handleAddNew} className={'add_inputs'}>
                <input value={name} required placeholder="Add Name" onChange={handleNameChange}/>
                <input type='email' required value={email} placeholder="Add Email" onChange={handleEmailChange}/>
                <select name='gender' onChange={handleGenderChange} value={gender} required>
                    <option>Choose gender...</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            <button>Add New User</button>
            </form>
            {data.map((i, k) =>(
                <table>
                    <tr>
                        <Link to={`/userDetails/${i.id}`}>
                            <td>{i.name}</td>
                        </Link>
                            <td>{i.email}</td>
                            <td>{i.gender}</td>
                            <td className='remove_btn'>
                            <button onClick={() => handleRemove(i.id)}>x</button>
                            </td>
                    </tr>
                </table>
                )) 
           
            }
             <button className={'del_all_btn'} onClick={handleDelete}>Delete All</button>
             <button className={'del_all_btn'} onClick={handleReturnDeleted}>Back</button>
        </div>
    )
}
