import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const onClickHandler = () => {
    // axios.get('http://localhost:5000/manager/logout', {
    //       }).then((res)=>{
    //       if(res.status===200){
    //         alert('로그아웃 성공');
    //         localStorage.setItem('isLogined',false);
    //         window.location.replace("/");
    //       } else {
    //         alert('로그아웃 실패');
    //       }
    //     }).catch((err)=>{
    //       console.log(err);
    //     })
    localStorage.removeItem('isLogined');
    window.location.replace("/");
}

export default function Topbar(){
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
                     localStorage.getItem('isLogined')
                     ?
                     <>
                        <button className="logoutButton" onClick={onClickHandler}>로그아웃</button>
                        <Link to="/ProfileEdit" className="signUpLink">내정보</Link>
                     </>
                     :
                     <>
                        <Link to="/Login" className="loginLink">로그인</Link>
                        <Link to="/Signup" className="signUpLink">회원가입</Link>
                     </>
                }
                </div>
            </div>
        </div>
    )
}