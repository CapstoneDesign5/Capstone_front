//회원가입 


import React from 'react';
// import './Signup.css';

const Signup = () => {
    return (
    <div>
        <div>
          <h3 id='signup_title'> 회원가입 (Signup) </h3>
        </div>
        <div className='Signup'>
          <div>
            {/* 아이디 */}
            <div>
              <h5> 아이디 </h5>
              <input type='text' maxLength='20' name='signup_id'/>
            </div>

            {/* 비밀번호 */}
            <div>
              <h5> 비밀번호 </h5>
              <input type='password' maxLength='15' name='signup_password'/>
            </div>

            {/* 비밀번호 */}
            <div>
              <h5> 비밀번호 확인 </h5>
              <input type='password' maxLength='15' name='signup_pswCheck'/>
            </div>
          </div>

          <div id='signup_section'>
            {/* 이름 */}
            <div>
              <h5> 이름 </h5>
              <input type='text' maxLength='10' name='signup_name'/>
            </div>

            {/* 생년월일 */}
            <div>
              <h5> 생년월일 </h5>
              <input type='text' maxLength='6' name='signup_birthday'/> - 
              <input type='text' maxLength='1' name='signup_sex'/> ******
            </div>

            {/* 생년월일 */}
            <div>
              <h5> 이메일 </h5>
              <input type='text' maxLength='15' name='signup_email'/> @
              <select name='signup_email_select'>
                <option value='gmail.com'> gmail.com </option>
                <option value='naver.com'> naver.com </option>
                <option value='write'> 직접 입력 </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <input type='button' value='가입하기' name='sigunup_submit'/>
        </div>
      </div>
    )
}

export default Signup;