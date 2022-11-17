import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Topbar(){
    console.log(JSON.parse(localStorage.getItem('isLogined')));
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        <Link to="/">Admin</Link>
                    </div>
                </div>
                <div className="topRight">
                {
                     JSON.parse(localStorage.getItem('isLogined'))
                     ?
                     <>
                        <Link to="/Login" className="loginLink">로그아웃</Link>
                        <Link to="/Signup" className="signUpLink">내정보</Link>
                     </>
                     :
                     <>
                        <Link to="/Login" className="loginLink">로그인</Link>
                        <Link to="/Signup" className="signUpLink">회원가입</Link>
                     </>
                }
                    {/* <div className="topbarIconContainer">
                        <NotificationsNoneIcon className="NotificationsIcon"/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="프로필이미지"
                        className="topAvatar"
                    /> */}
                </div>
            </div>
        </div>
    )
}