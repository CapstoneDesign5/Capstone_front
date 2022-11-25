//관리자 비밀번호 변경 페이지

import axios from 'axios';
import React,{useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import './css/PasswordEdit.css';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
const PasswordEdit = () => {

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) { 
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const [newPassword, setNewPassword] = useState(""); //새 비밀번호

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const [password, setPassword] = useState(""); //기존 비밀번호

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const [conFirmpassword, setConfirmPassword] = useState(""); //새 비밀번호 확인용

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/manager/password/'+localStorage.getItem('isLogined'), {
            password:newPassword
        }).then((res)=>{
          if(res.status===200){
            alert('비밀번호 변경 성공');
            localStorage.removeItem('isLogined');
            localStorage.removeItem('isLoginPassword');
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
                {
                    password == localStorage.getItem('isLoginPassword')
                    ?
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">기존 비밀번호</InputLabel>
                        <Input type="password" id="component-simple" value={password} onChange={handlePasswordChange} />
                    </FormControl>
                    :
                    <FormControl error variant="standard">
                        <InputLabel htmlFor="component-error">기존 비밀번호</InputLabel>
                        <Input
                        type="password"
                        id="component-error"
                        value={password}
                        onChange={handlePasswordChange}
                        aria-describedby="component-error-text"
                        />
                        <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                }
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">새 비밀번호</InputLabel>
                        <Input type="password" id="component-simple" value={newPassword} onChange={handleNewPasswordChange} />
                    </FormControl>

                {
                    newPassword == conFirmpassword
                    ?
                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">새 비밀번호 확인</InputLabel>
                        <Input type="password" id="component-simple" value={conFirmpassword} onChange={handleConfirmPassword} />
                    </FormControl>
                    :
                    <FormControl error variant="standard">
                        <InputLabel htmlFor="component-error">새 비밀번호 확인</InputLabel>
                        <Input
                        type="password"
                        id="component-error"
                        value={conFirmpassword}
                        onChange={handleConfirmPassword}
                        aria-describedby="component-error-text"
                        />
                        <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                }
                </div>
                <button className="newPasswordbutton">변경</button>
            </Box>
        </div>
        </form>
    </div>
    )
}

export default PasswordEdit;