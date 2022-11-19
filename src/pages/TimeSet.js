//기기 시간 설정 페이지


import React from 'react';
import './css/TimeSet.css';

const TimeSet = () => {
    return (
        <div className="newTimeSet">
            <h1 className="newTimeSetTitle">기기 시간 설정</h1>
            <form className="newTimeSetForm">
                <div className="newTimeSetItem">
                    <label>주민등록번호</label>
                    <input type="text" placeholder="xxxxxx-xxxxxxx" />
                </div>
                <div className="newTimeSetItem">
                    <label>날짜</label>
                    <input type="date" placeholder="xxxx.xx.xx" />
                </div>
                <div className="newTimeSetItem">
                    <label>시간</label>
                    <input type="time" placeholder="00시 00분" />
                </div>
                <div className="newTimeSetItem">
                    <label>복용 약품명</label>
                    <input type="text" placeholder="예) 노브카핀정" />
                </div>

            </form>
            <button className="newTimeSetButton">등록</button>
        </div>
    )
}

export default TimeSet;