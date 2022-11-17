//로그인 페이지


import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './Login.css';

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
            console.log(res.data.is_logined);
            console.log(localStorage.getItem('isLogined'));
            navigate('/');
          } else {
            alert('로그인 실패');
          }
        }).catch((err)=>{
          console.log(err);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>로그인</h2>
            </div>

            <div>
              <h5> 아이디 </h5>
              <input onChange={handleIdChange} type='text' maxLength='20' name='signup_id'/>
            </div>

            <div>
              <h5> 비밀번호 </h5>
              <input onChange={handlePasswordChange} type='password' maxLength='15' name='signup_password'/>
            </div>

            <div>
                <button type='submit'>Sign In</button>
            </div>
        </form>
    )
}

export default Login;