//로그인 페이지


import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InputWithLabel } from '../components';
import { Link } from 'react-router-dom';
import './css/Login.css';

const Login = () => {
    const [id, setID] = useState("");
    const [password, setPassword] = useState("");

    const handleIdChange = (event) => {
        setID(event.target.value);
    }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/manager/login', {
          id:id,
          password:password
        }).then((res)=>{
          if(res.status===200){
            alert('로그인 성공');
            localStorage.setItem('isLogined',id);
            localStorage.setItem('isLoginPassword',password);
            window.location.replace("/");
          }
        }).catch((err)=>{
          alert('아이디 또는 비밀번호를 다시 입력해주세요.');
          console.log(err);
        })
    }

    return (
      <div className="login_container">
        <form onSubmit={handleSubmit}>
          <div className="login_header">
            <p id="login_text">Login</p>
          </div>
            <div className="login_body">
              <InputWithLabel label="아이디" onChange={handleIdChange} type='text' maxLength='20' name='signup_id' placeholder="아이디를 입력하세요." />
              <InputWithLabel label="비밀번호" onChange={handlePasswordChange} type='password' maxLength='15' name='signup_password' placeholder="비밀번호를 입력하세요."/>
              <Link to="/Signup" className="signup_link">회원가입</Link>
              <button type='submit' className="login_submit_btn">로그인</button> 
            </div>
        </form>
      </div>
    )
}

export default Login;