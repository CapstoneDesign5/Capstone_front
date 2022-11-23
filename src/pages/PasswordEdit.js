//관리자 비밀번호 변경 페이지

import axios from 'axios';
import React,{useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import './css/PasswordEdit.css';

const PasswordEdit = () => {

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) { 
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const [newPassword, setNewPassword] = useState("");

    const handlePasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/manager/password/'+localStorage.getItem('isLogined'), {
            password:newPassword
        }).then((res)=>{
          if(res.status===200){
            alert('비밀번호 변경 성공');
            localStorage.removeItem('isLogined');
            window.location.replace("/Login");
          }
        }).catch((err)=>{
          alert('비밀번호 변경 실패');
          console.log(err);
        })
      }

    return (
    <div className="PasswordEditFormWrapper">
        <form onSubmit={handleSubmit}>
        <div className="PasswordEditFormTitle">
            <h1>비밀번호 변경</h1>
        </div>
        <div className="PasswordEditFormSection">
            <Box sx={{ height: 400, width: 900, border: 1 }} >
                <div className="PasswordEditFormLabel">
                    <label htmlfor="oldPassword">기존 비밀번호</label>
                    <input id="oldPassword" type="password"></input>

                    <label htmlfor="newPassword">새 비밀번호</label>
                    <input id="newPassword" type="password" onChange={handlePasswordChange}></input>

                    <label htmlfor="confirmPassword">새 비밀번호 확인</label>
                    <input id="confirmPassword" type="password"></input>
                </div>
                <button className="newPasswordbutton">변경</button>
            </Box>
        </div>
        </form>
    </div>
    )
}

export default PasswordEdit;