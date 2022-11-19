//고객 정보 등록 페이지


import React from 'react';
import './css/MemberReg.css';

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