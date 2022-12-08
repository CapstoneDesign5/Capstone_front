//고객 정보 등록 페이지


import React, {useState ,useEffect, useRef} from 'react';
import axios from 'axios';
// import DaumPostCode from 'react-daum-postcode';
// import Modal from '../components/Modal';
import './css/MemberReg.css';

const MemberReg = () => {
    const [RRN, setRRN] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [landline_phone, setLandlinePhone] = useState("");
    const [phone_num, setPhoneNum] = useState("");
    const [remark, setRemark] = useState("없음");
    const [manager_id, setManagerId] = useState("");

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) {
            setManagerId(localStorage.getItem('isLogined')); 
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const handleRRNChange = (event) => {
        setRRN(event.target.value);
    }
  
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
  
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }
  
    const handleLandlinePhoneChange = (event) => {
        setLandlinePhone(event.target.value);
    }

    const handlePhoneNumChange = (event) => {
        setPhoneNum(event.target.value);
    }
  
    const handleRemakrChange = (event) => {
        setRemark(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:5000/customer/register', {
        RRN:RRN,
        name:name,
        address:address,
        landline_phone:landline_phone,
        phone_num:phone_num,
        remark:remark,
        manager_id:manager_id
      }).then((res)=>{
        if(res.status===200){
          alert('회원 정보 등록 성공');
          window.location.replace("/memberEdit");
        }
      }).catch((err)=>{
        alert('회원 정보 등록 실패');
        console.log(err);
      })
    }

    return (
        <div className="MemberRegWrapper">
            <h2>고객 정보 등록</h2>
            <div className="form_container">
            <form onSubmit={handleSubmit}>
            <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>주민등록번호</th>
                          <td><input className="inputSizeSmall" label="주민등록번호" type="text" onChange={handleRRNChange} placeholder="xxxxxx-xxxxxxx" required /></td>
                      </tr>
                      <tr>
                          <th>이름</th>
                          <td><input className="inputSize" label="이름" type="text" onChange={handleNameChange} placeholder="홍길동" /></td>
                      </tr>
                      <tr>
                          <th>주소</th>
                          <td>
                            <input className="inputSize" label="주소" type="text" onChange={handleAddressChange} placeholder="xx시 xx구" />
                          </td>
                      </tr>
                      <tr>
                          <th>집 전화</th>
                          <td><input className="inputSize" label="집 전화" type="tel" onChange={handleLandlinePhoneChange} placeholder="xxx-xxx-xxxx" /></td>
                      </tr>
                      <tr>
                          <th>휴대전화</th>
                          <td><input className="inputSize" label="휴대전화" type="tel" onChange={handlePhoneNumChange} placeholder="010-xxxx-xxxx" /></td>
                      </tr>
                      <tr>
                          <th>기타</th>
                          <td><input className="inputSizeBig" label="기타" type="text" onChange={handleRemakrChange} placeholder="없음" /></td>
                      </tr>
                  </tbody>
                  <tfoot>
                        <div className="footer_reg_btn>">
                            <button type="submit" className="submit_btn">등록</button>
                        </div>
                  </tfoot>
              </table>
            </form>
            </div>
        </div>
    )
}

export default MemberReg;