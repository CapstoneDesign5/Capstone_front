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
    const [memo, setMemo] = useState(""); //기타

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


        <div className="newMedicine">
            <h1 className="newMedicineTitle">약품 정보 등록</h1>
            <form className="newMedicineForm" onSubmit={handleSubmit}>
                <div className="newMedicineItem">
                    <label>약품명</label>
                    <input onChange={handleMedicineChange} type="text" placeholder="예) 노브카핀정" />
                </div>
                <div className="newMedicineItem">
                    <label>무게</label>
                    <input onChange={handleWeightChange} type="text" placeholder="예) 0.5" />
                </div>
                <div className="newMedicineItem">
                    <label>1회 권장 용량</label>
                    <input onChange={handleRecommendedDoseChange} type="number" placeholder="1" />
                </div>
                <div className="newMedicineItem">
                    <label>1일 투약 횟수</label>
                    <input onChange={handleNumberOfDosesChange} type="number" placeholder="1" />
                </div>
                <div className="newMedicineItem">
                    <label>기타</label>
                    <input onChange={handleMemo} type="text" />
                </div>
                <div>
                    <button className="newMedicineButton" type='submit'>등록</button>
                </div>
            </form>
        </div>



        // <div className="MedicineFormWrapper">
        // <form onSubmit={handleSubmit}>
        // <div className="MedicineFormTitle">
        //     <h2>약품 정보 등록</h2>
        // </div>
        // <div className="MedicineFormSection">
        //     <InputWithLabel input label="약품명" onChange={} type='text' maxLength='100' name='medicine' placeholder="예) 노브카핀정"/>
        //     <InputWithLabel input label="1회 투약량" onChange={} type='text' maxLength='10' name='recommended_dose' placeholder="1회 투약량"/>
        //     <InputWithLabel input label="1일 투약 횟수" onChange={} type='text' maxLength='10' name='number_of_doses' placeholder="1일 투약 횟수"/>
        //     <InputWithLabel input label="무게" onChange={} type='text' maxLength='20' name='weight' placeholder="무게(g)"/>
        //     <InputWithLabel input label="메모" onChange={} type='text' maxLength='100' name='memo' placeholder="기타"/> 
                
        //     <button type='submit'>등록</button>
        // </div>
        // </form>
        // </div>




    )
}

export default MedicineReg;