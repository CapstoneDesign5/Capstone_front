import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute"; 
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { 
  Home, 
  Login,
  Signup,
  MemberEdit, 
  MemberReg, 
  MedicineEdit, 
  MedicineReg,
  TimeSet, 
  PasswordEdit, 
  ProfileEdit} from './pages';

class App extends Component {
    render() {
        return (
          <div className="App">
              <Topbar />
            <div className="container">
              <Sidebar />
              <div className="section">
              <Routes>
                <Route exact path="/*" element={<Home/>}/>
                <Route path="/Login" element={<Login/>} />
                <Route path="/Signup" element={<Signup/>} />
                <Route path="/MemberEdit" element={<MemberEdit/>} />
                <Route path="/MemberReg" element={<MemberReg/>} />
                <Route path="/MedicineEdit" element={<MedicineEdit/>} />
                <Route path="/MedicineReg" element={<MedicineReg/>} />
                <Route path="/TimeSet" element={<TimeSet/>} />
                <Route path="/ProfileEdit" element={<ProfileEdit/>} />
                <Route path="/PasswordEdit" element={<PasswordEdit/>} />
              
              </Routes>
              </div>
            </div>
          </div>                
        );
    }
}

export default App;
