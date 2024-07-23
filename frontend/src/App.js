
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import Layout from './Layout';
import Registration from './Registration';
import Insert from './Insert';
import Display from './Display';
import Update from './Update';
import Edit from './Edit';
import Login from './Login';
import Student from './Student';
import Teacher from './Teacher';
import Insititude from './Insititude';
import { isAuthenticated } from './utils/auth'
const App=()=> {
    
  return (
   <>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Registration/>}/>
    <Route path="registration" element={<Registration/>}/>
    <Route path='login' element={isAuthenticated()?<Navigate to="/student" />:<Login/>}/>
    <Route path='student' element={<Student/>}/>
    <Route path='login' element={isAuthenticated()?<Navigate to="/teacher" />:<Login/>}/>
    <Route path='teacher' element={<Teacher/>}/>
    <Route path='insititude' element={<Insititude/>}>
    <Route index element={<Insert/>}/>
    <Route path='insert' element={<Insert/>}/>
    <Route path='display' element={<Display/>}/>
    <Route path='update' element={<Update/>}/>
   
       </Route>
       <Route path="/edit/:id" element={<Edit/>}/>
    </Route>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
