//회원가입 

import React, {useState} from 'react';
import axios from 'axios';
import InputWithLabel from '../components/InputWithLabel';
import './css/Signup.css';

const Signup = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");

  const handleIdChange = (event) => {
    setID(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/manager/register', {
      id:id,
      name:name,
      phone_num:phoneNum,
      e_mail:email,
      password:password
    }).then((res)=>{
      if(res.status===200){
        alert('회원가입 성공');
      } else {
        alert('회원가입 실패');
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="SignupFormWrapper">
      <form onSubmit={handleSubmit}>
        <div className="SignupFormTitle">
            <h2>회원가입 (Signup)</h2>
        </div>
        <div className="SignupFormSection">
          <InputWithLabel input label="아이디" onChange={handleIdChange} type='text' maxLength='20' name='signup_id' placeholder="아이디"/>
          <InputWithLabel input label="비밀번호" onChange={handlePasswordChange} type='password' maxLength='15' name='signup_password' placeholder="비밀번호"/>
          {/* <InputWithLabel label="비밀번호 확인" type='password' maxLength='15' name='signup_pswCheck'/> */}
          <InputWithLabel input label="이름" onChange={handleNameChange} type='text' maxLength='10' name='signup_name' placeholder="이름"/>
          <InputWithLabel input label="휴대전화" onChange={handlePhoneNumChange} type='text' maxLength='20' name='signup_phone_num' placeholder="010-xxxx-xxxx"/>
          <InputWithLabel input label="이메일" onChange={handleEmail} type='text' maxLength='30' name='signup_email' placeholder="xxx@gmail.com"/> 
              
          <button type='submit'>가입하기</button>
        </div>
      </form>
    </div>
    )
}

export default Signup;