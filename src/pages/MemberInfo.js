//고객 정보 수정 페이지


import React,{useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import './css/MemberInfo.css';
import axios from 'axios';

const MemberInfo = () => {
    const {RRN} = useParams();

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) { 
            axios.post('http://localhost:5000/customer/Info', {
                RRN : RRN
            })
            .then((res)=>{
                setName(res.data[0].name); //상단 관리자 정보 출력을 위해서 저장
                setNewName(res.data[0].name); //입력폼이 공백이면 기존의 정보를 서버로 넘겨주기 위해서 저장
                //입력폼의 값이 변경된 경우 관리자 정보가 변경되기 전에는 상단 관리자 정보 출력 부분의 데이터를 변경시키지 않기 위해
                //New를 붙여서 기존의 관리자 정보와 새로운 관리자 정보를 따로 관리
                setAddress(res.data[0].address);
                setNewAddress(res.data[0].address);
                setLandlinePhone(res.data[0].landline_phone);
                setNewLandlinePhone(res.data[0].landline_phone);
                setPhoneNum(res.data[0].phone_num);
                setNewPhoneNum(res.data[0].phone_num);
                setRemark(res.data[0].remark);
                setNewRemark(res.data[0].remark);
            })
            .catch((err)=>{
                console.log(err);
            })
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [landlinePhone, setLandlinePhone] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [remark, setRemark] = useState("");

    const [newName, setNewName] = useState(localStorage.getItem('isLogined'));
    const [newAddress, setNewAddress] = useState(address);
    const [newLandlinePhone, setNewLandlinePhone] = useState(landlinePhone);
    const [newPhoneNum, setNewPhoneNum] = useState(phoneNum);
    const [newRemark, setNewRemark] = useState(remark);

    const handleNewNameChange = (event) => {
        setNewName(event.target.value);
    }
  
    const handleNewAddressChange = (event) => {
        setNewAddress(event.target.value);
    }
  
    const handleNewLandlinePhoneChange = (event) => {
        setNewLandlinePhone(event.target.value);
    }
  
    const handleNewPhoneNumChange = (event) => {
        setNewPhoneNum(event.target.value);
    }

    const handleNewRemarkChange = (event) => {
        setNewRemark(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/customer/InfoUpdate/'+ RRN, {
            name : newName,
            address : newAddress,
            landline_phone : newLandlinePhone,
            phone_num : newPhoneNum,
            remark : newRemark
        }).then((res)=>{
          if(res.status===200){
            alert('회원 정보 변경 성공');
            window.location.replace("/memberEdit");
          }
        }).catch((err)=>{
          alert('회원 정보 변경 실패');
          console.log(err);
        })
      }

    return (
      <div className="MemberInfoWrapper">
      <h2>고객 정보 수정</h2>
      <div className="form_container">
            <form onSubmit={handleSubmit}>
              <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>이름</th>
                          <td><input className="inputSizeSmall" label="이름" type="text" placeholder={name} onChange={handleNewNameChange} /></td>
                      </tr>
                      <tr>
                          <th>주민등록번호</th>
                          <td><input className="inputSize" label="주민등록번호" type="text" disabled placeholder={name} onChange={handleNewNameChange} /></td>
                      </tr>
                      <tr>
                          <th>주소</th>
                          <td><input className="inputSize" label="주소" type="text" placeholder={address} onChange={handleNewAddressChange} /></td>
                      </tr>
                      <tr>
                          <th>집 전화</th>
                          <td><input className="inputSize" label="집 전화" type="text" placeholder={landlinePhone} onChange={handleNewLandlinePhoneChange} /></td>
                      </tr>
                      <tr>
                          <th>휴대전화</th>
                          <td><input className="inputSize" label="휴대전화" type="text" placeholder={phoneNum} onChange={handleNewPhoneNumChange} /></td>
                      </tr>
                      <tr>
                          <th>기타</th>
                          <td><input className="inputSizeBig" label="메모" type="text" placeholder={remark}onChange={handleNewRemarkChange} /></td>
                      </tr>
                  </tbody>
                  <tfoot>
                        <div className="footer_reg_btn>">
                            <button type="submit" className="submit_btn">변경</button>
                        </div>
                  </tfoot>
              </table>
            </form>
        </div>
    </div>
    )
}

export default MemberInfo;