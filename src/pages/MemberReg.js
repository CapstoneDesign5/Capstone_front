//고객 정보 등록 페이지


import React, {useState ,useEffect} from 'react';
import axios from 'axios';
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
        <div className="newMember" onSubmit={handleSubmit}>
            <h1 className="newMemberTitle">고객정보등록</h1>
            <form className="newMemberForm">
                <div className="newMemberItem">
                    <label>RRN</label>
                    <input type="text" onChange={handleRRNChange} placeholder="xxxxxx-xxxxxxx" required />
                </div>
                <div className="newMemberItem">
                    <label>이름</label>
                    <input type="text" onChange={handleNameChange} placeholder="홍길동" />
                </div>
                <div className="newMemberItem">
                    <label>주소</label>
                    <input type="tel" onChange={handleAddressChange} placeholder="xx시 xx군" />
                </div>
                <div className="newMemberItem">
                    <label>집 전화</label>
                    <input type="tel" onChange={handleLandlinePhoneChange} placeholder="xxx-xxx-xxxx" />
                </div>
                <div className="newMemberItem">
                    <label>휴대폰번호</label>
                    <input type="text" onChange={handlePhoneNumChange} placeholder="010-xxxx-xxxx" />
                </div>
                <div className="newMemberItem">
                    <label>기타</label>
                    <input type="text" onChange={handleRemakrChange} placeholder="없음" />
                </div>
                <button className="newMemberButton" type='submit'>등록</button>
            </form>
        </div>



        // <div className="MemberFormWrapper">
        // <form onSubmit={handleSubmit}>
        // <div className="MemberFormTitle">
        //     <h2>약품 정보 등록</h2>
        // </div>
        // <div className="MemberFormSection">
        //     <InputWithLabel input label="주민등록번호" onChange={} type='text' maxLength='15' name='RRN' placeholder="주민등록번호"/>
        //     <InputWithLabel input label="이름" onChange={} type='text' maxLength='10' name='name' placeholder="이름"/>
        //     <InputWithLabel input label="주소" onChange={} type='text' maxLength='100' name='address' placeholder="주소"/>
        //     <InputWithLabel input label="일반전화" onChange={} type='text' maxLength='15' name='landine_phone' placeholder="전화번호"/>
        //     <InputWithLabel input label="휴대전화" onChange={} type='text' maxLength='15' name='phone_num' placeholder="휴대전화"/> 
        //     <InputWithLabel input label="특이사항" onChange={} type='text' maxLength='100' name='remark' placeholder="기타"/> 
                
        //     <button type='submit'>등록</button>
        // </div>
        // </form>
        // </div>








    )
}

export default MemberReg;