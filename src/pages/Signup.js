//회원가입 

import React, {useState} from 'react';
import axios from 'axios';
// import './Signup.css';

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
    console.log('버튼 이벤트 실행');
    event.preventDefault();
    axios.post('/manager/register', {
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
    <form onSubmit={handleSubmit}>
        <div>
          <h3 id='signup_title'> 회원가입 (Signup) </h3>
        </div>
        <div className='Signup'>
          <div>
            {/* 아이디 */}
            <div>
              <h5> 아이디 </h5>
              <input onChange={handleIdChange} type='text' maxLength='20' name='signup_id'/>
            </div>

            {/* 비밀번호 */}
            <div>
              <h5> 비밀번호 </h5>
              <input onChange={handlePasswordChange} type='password' maxLength='15' name='signup_password'/>
            </div>

            {/* 비밀번호 */}
            {/* <div>
              <h5> 비밀번호 확인 </h5>
              <input type='password' maxLength='15' name='signup_pswCheck'/>
            </div> */}
          </div>

          <div id='signup_section'>
            {/* 이름 */}
            <div>
              <h5> 이름 </h5>
              <input onChange={handleNameChange} type='text' maxLength='10' name='signup_name'/>
            </div>

            {/* 휴대폰 번호 */}
            <div>
              <h5> 휴대폰 번호 </h5>
              <input onChange={handlePhoneNumChange} type='text' maxLength='20' name='signup_phone_num'/>
            </div>

            {/* 생년월일 */}
            <div>
              <h5> 이메일 </h5>
              <input onChange={handleEmail} type='text' maxLength='15' name='signup_email'/> @
              <select name='signup_email_select'>
                <option value='gmail.com'> gmail.com </option>
                <option value='naver.com'> naver.com </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <button type='submit'>가입하기</button>
        </div>
      </form>
    )
}

export default Signup;