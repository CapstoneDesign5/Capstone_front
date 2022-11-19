//약품 정보 등록 페이지


import React from 'react';
import './css/MedicineReg.css';

const MedicineReg = () => {
    return (


        <div className="newMedicine">
            <h1 className="newMedicineTitle">약품 정보 등록</h1>
            <form className="newMedicineForm">
                <div className="newMedicineItem">
                    <label>약품명</label>
                    <input type="text" placeholder="예) 노브카핀정" />
                </div>
                <div className="newMedicineItem">
                    <label>약품코드</label>
                    <input type="text" placeholder="예) 459801ATB" />
                </div>
                <div className="newMedicineItem">
                    <label>무게</label>
                    <input type="text" placeholder="예) 0.5" />
                </div>
                <div className="newMedicineItem">
                    <label>1회 투약량</label>
                    <input type="number" placeholder="1" />
                </div>
                <div className="newMedicineItem">
                    <label>1일 투약 횟수</label>
                    <input type="number" placeholder="1" />
                </div>
            </form>
            <button className="newMedicineButton">등록</button>
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