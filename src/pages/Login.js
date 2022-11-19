//로그인 페이지


import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { InputWithLabel, AuthButton } from '../components';
import './css/Login.css';

const Login = () => {
    const navigate = useNavigate();

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
            localStorage.setItem('isLogined',res.data.is_logined);
            window.location.replace("/");
          } else {
            alert('로그인 실패');
          }
        }).catch((err)=>{
          console.log(err);
        })
    }

    return (
      <div className="LoginFormWrapper">
        <form onSubmit={handleSubmit}>
            <div className="LoginFormTitle">
                <h2>로그인</h2>
            </div>
            <div className="LoginFormSection">
              <InputWithLabel label="아이디" onChange={handleIdChange} type='text' maxLength='20' name='signup_id' placeholder="아이디를 입력하세요." />
              <InputWithLabel label="비밀번호" onChange={handlePasswordChange} type='password' maxLength='15' name='signup_password' placeholder="비밀번호를 입력하세요."/>
              
              <button type='submit'>등록</button> 
            </div>
            
        </form>
      </div>
    )
}

export default Login;