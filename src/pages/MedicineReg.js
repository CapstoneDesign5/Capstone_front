//약품 정보 등록 페이지


import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './css/MedicineReg.css';

const MedicineReg = () => {
    useEffect(()=>{
      if(localStorage.getItem('isLogined')) {}
      else{
          alert('로그인이 필요합니다.');
          window.location.replace("/Login");
      }
    },[]);

    const [medicine, setMedicine] = useState(""); //약품명
    const [recommanded_dose, setRecommendedDose] = useState(""); //1회 권장 용량
    const [number_of_doses, setNumberOfDoses] = useState(""); //1일 투약 횟수
    const [weight, setWeight] = useState(""); //무게
    const [memo, setMemo] = useState("없음"); //기타

    const handleMedicineChange = (event) => {
        setMedicine(event.target.value);
    }
    
      const handleRecommendedDoseChange = (event) => {
        setRecommendedDose(event.target.value);
    }
    
      const handleNumberOfDosesChange = (event) => {
        setNumberOfDoses(event.target.value);
    }
    
      const handleWeightChange = (event) => {
        setWeight(event.target.value);
    }
    
      const handleMemo = (event) => {
        setMemo(event.target.value);
    }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/medicineManagement/input', {
            medicine:medicine,
            recommanded_dose:recommanded_dose,
            number_of_doses:number_of_doses,
            weight:weight,
            memo:memo
        }).then((res)=>{
          if(res.status===200){
            alert('신규 약품 등록 성공');
            window.location.replace("/medicineEdit");
          } 
        }).catch((err)=>{
          alert('이미 등록된 약품입니다.');
          console.log(err);
        })
      }

    return (
        <div className="MedicineRegWrapper">
            <h2>약품 정보 등록</h2>
            <div className="form_container">
            <form onSubmit={handleSubmit}>
            <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>약품명</th>
                          <td><input className="inputSizeSmall" label="약품명" onChange={handleMedicineChange} type="text" placeholder="예) 노브카핀정" /></td>
                      </tr>
                      <tr>
                          <th>무게</th>
                          <td><input className="inputSize" label="무게" onChange={handleWeightChange} type="text" placeholder="예) 0.5" /></td>
                      </tr>
                      <tr>
                          <th>1회 권장 용량</th>
                          <td><input className="inputSize" label="1회 권장 용량" onChange={handleRecommendedDoseChange} type="number" placeholder="1" /></td>
                      </tr>
                      <tr>
                          <th>1일 투약 횟수</th>
                          <td><input className="inputSize" label="1일 투약 횟수" onChange={handleNumberOfDosesChange} type="number" placeholder="1" /></td>
                      </tr>
                      <tr>
                          <th>기타</th>
                          <td><input className="inputSizeBig" label="기타" onChange={handleMemo} type="text" placeholder="없음"/></td>
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

export default MedicineReg;