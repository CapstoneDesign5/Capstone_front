//고객 정보 등록 페이지


import React, {useState ,useEffect} from 'react';
import axios from 'axios';
import { InputWithLabel } from '../components';
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
        }
      }).catch((err)=>{
        alert('회원 정보 등록 실패');
        console.log(err);
      })
    }

    return (
        <div className="MemberFormWrapper">
            <form onSubmit={handleSubmit}>
                <div className="MemberFormTitle">
                    <h1>고객정보등록</h1>
                </div>
                <div className="MemberFormSection">
                    <InputWithLabel input label="주민등록번호" type="text" onChange={handleRRNChange} placeholder="xxxxxx-xxxxxxx" required />
                    <InputWithLabel input label="이름" type="text" onChange={handleNameChange} placeholder="홍길동" />
                    <InputWithLabel input label="주소" type="tel" onChange={handleAddressChange} placeholder="xx시 xx군" />
                    <InputWithLabel input label="집 전화" type="tel" onChange={handleLandlinePhoneChange} placeholder="xxx-xxx-xxxx" />
                    <InputWithLabel input label="휴대전화" type="text" onChange={handlePhoneNumChange} placeholder="010-xxxx-xxxx" /> 
                    <InputWithLabel input label="기타" type="text" onChange={handleRemakrChange} placeholder="없음" /> 
                        
                    <button className="newMemberButton" type='submit'>등록</button>
                </div>
            </form>
        </div>
    )
}

export default MemberReg;