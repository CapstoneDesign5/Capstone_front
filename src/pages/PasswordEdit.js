//관리자 비밀번호 변경 페이지


import React from 'react';
import Box from '@mui/material/Box';
import './css/PasswordEdit.css';

const PasswordEdit = () => {
    return (
    <div className="PasswordEditFormWrapper">
        {/* <form onSubmit={handleSubmit}> */}
        <div className="PasswordEditFormTitle">
            <h1>비밀번호 변경</h1>
        </div>
        <div className="PasswordEditFormSection">
            <Box sx={{ height: 400, width: 900, border: 1 }} >
                <div className="PasswordEditFormLabel">
                    <label htmlfor="oldPassword">기존 비밀번호</label>
                    <input id="oldPassword" type="password"></input>

                    <label htmlfor="newPassword">새 비밀번호</label>
                    <input id="newPassword" type="password"></input>

                    <label htmlfor="confirmPassword">새 비밀번호 확인</label>
                    <input id="confirmPassword" type="password"></input>
                </div>
                <button className="newPasswordbutton">변경</button>
            </Box>
        </div>
        {/* </form> */}
    </div>
    )
}

export default PasswordEdit;