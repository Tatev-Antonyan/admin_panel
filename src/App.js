import './App.css';
import { Routes, Route } from 'react-router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login'
import { UsersList } from './pages/usersList/usersList';
import { UserDetails } from './pages/userDetails/userDetails';
import { CreateUsers } from './pages/createUsers/createUsers';
import { NotFound } from './pages/notFound/notFound';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://gorest.co.in/public/v2/users');
      setData(res.data)
    }
    getData()
  }, [])
       
  return (
    <div>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/usersList' element={<UsersList data={data}/>}/>
      <Route path='/userDetails/:id' element={<UserDetails data={data}/>}/>
      <Route path='/createUsers' element={<CreateUsers data={data} setData={setData}/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes> 
    </div>
  );
}

export default App;


