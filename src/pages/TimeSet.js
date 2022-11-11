//기기 시간 설정 페이지


import React from 'react';
import './TimeSet.css';

const TimeSet = () => {
    return (
        <div className="newTimeSet">
            <h1 className="newTimeSetTitle">기기 시간 설정</h1>
            <form className="newTimeSetForm">
                <div className="newTimeSetItem">
                    <label>기기 선택</label>
                    <select className='selectCab'>
                        <option value='A1'> A1 </option>
                        <option value='A2'> A2 </option>
                        <option value='A3'> A3 </option>
                        <option value='B1'> B1 </option>
                        <option value='B2'> B2 </option>
                        <option value='B3'> B3 </option>
                    </select>
                </div>
                <div className="newTimeSetItem">
                    <label>날짜</label>
                    <input type="date" placeholder="xxxx.xx.xx" />
                </div>
                <div className="newTimeSetItem">
                    <label>시간</label>
                    <input type="time" placeholder="00시 00분" />
                </div>
            </form>
            <button className="newTimeSetButton">등록</button>
        </div>
    )
}

export default TimeSet;