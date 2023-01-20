import Login from './Login';
import Sidebar from './Sidebar';
import './App.css';
import './sb-admin-2.min.css'
import Nav from './Nav';
 import Card from './Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from './Userlist';
import Portal from './Portal';
import Createusers from './Createusers';
import UserView from './UserView';
import Useredit from './Useredit';

function App() {
  return (
     <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path='/portal' element={<Portal/>}>
            <Route path="card" element={<Card/>}/>
            <Route path="userlist" element={<Userlist/>}/>
            <Route path="createusers" element={<Createusers/>}/>
            <Route path='user-view/:id' element={<UserView/>}/>
            <Route path='useredit/:id'element={<Useredit/>}/>
            </Route>
            
            </Routes>
            
   
            </BrowserRouter>
         
   
  );
}

export default App;
