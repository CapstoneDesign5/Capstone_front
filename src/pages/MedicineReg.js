//약품 정보 등록 페이지


import React from 'react';
import './MedicineReg.css';

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
    )
}

export default MedicineReg;