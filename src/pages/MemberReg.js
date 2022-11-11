//고객 정보 등록 페이지


import React from 'react';
import './MemberReg.css';

const MemberReg = () => {
    return (
        <div className="newMember">
            <h1 className="newMemberTitle">고객정보등록</h1>
            <form className="newMemberForm">
                <div className="newMemberItem">
                    <label>이름</label>
                    <input type="text" placeholder="홍길동" />
                </div>
                <div className="newMemberItem">
                    <label>생년월일</label>
                    <input type="date" placeholder="xxxx.xx.xx" />
                </div>
                <div className="newMemberItem">
                    <label>이메일</label>
                    <input type="email" placeholder="honggildong@gmail.com" />
                </div>
                <div className="newMemberItem">
                    <label>휴대폰번호</label>
                    <input type="tel" placeholder="010-0000-0000" />
                </div>
                <div className="newMemberItem">
                    <label>주소</label>
                    <input type="text" placeholder="xx시 xx군" />
                </div>
                <div className="newMemberItem">
                    <label>기타사항</label>
                    <input type="text" placeholder="" />
                </div>
            </form>
            <button className="newMemberButton">등록</button>
        </div>
    )
}

export default MemberReg;