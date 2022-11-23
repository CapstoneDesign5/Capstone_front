//관리자 프로필 정보 변경 페이지


import React from 'react';
import Box from '@mui/material/Box';
import './css/ProfileEdit.css';

const ProfileEdit = () => {
    return (
        <div className="ProfileEditFormWrapper">
            {/* <form onSubmit={handleSubmit}> */}
                <div className="ProfileEditFormTitle">
                    <h1>개인정보 관리</h1>
                </div>
                <div className="ProfileEditFormSection">

                    <Box sx={{ height: 100, width: 900, border: 1, marginBottom: 5,}} >
                        <div className="ProfileBox">
                            {/* 관리자 프로필 ( 이메일, 이름 ) 들어가는 부분 */}
                            <label>관리자 프로필</label>
                        </div>
                    </Box>

                    <Box sx={{ height: 400, width: 900, border: 1 }} >
                        <div className="MyInfoBox">
                            <label htmlfor="managerName">이름</label>
                            <input id="managerName" type="text"/>

                            <label htmlfor="phoneNumber">휴대전화번호</label>
                            <input id="phoneNumber" type="text"/>

                            <label htmlfor="managerId">아이디</label>
                            <input id="managerId" type="text"/>

                            <label htmlfor="managerEmail">E-mail</label>
                            <input id="managerEmail" type="text"/>

                        </div>
                    </Box>
                    <button className="newPasswordbutton">변경</button>
                </div>
            {/* </form> */}
        </div>

    )
}

export default ProfileEdit;