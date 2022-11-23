//기기 시간 설정 페이지


import React from 'react';
import { InputWithLabel } from '../components';
import './css/TimeSet.css';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { useState, useEffect } from 'react';

const TimeSet = () => {

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) {
            axios.get('http://localhost:5000/medicineManagement/list')
                .then((res)=>{
                    setData(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const [data, setData] = useState([]);
    //const [medicine, setMedicine] = useState(''); //복용 약품명 리스트 출력을 위한 변수

    const [timeRRN, setTimeRRN] = useState(""); //해당 약통 사용자 주민등록번호
    const [time, setTime] = useState(""); //복용 시간
    const [date, setDate] = useState(""); //복용 날짜
    const [timeMedicine, setTimeMedicine] = useState(""); //복용 약품명

    const handletimeRRNChange = (event) => {
        setTimeRRN(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeMedicineChange = (event) => {
        setTimeMedicine(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/medicineTime/input', {
            RRN:timeRRN,
            time:time,
            date:date,
            medicine:timeMedicine
        }).then((res)=>{
          if(res.status===200){
            alert('약품 복용 시간이 등록되었습니다.');
            window.location.replace("/timeSet");
          } 
        }).catch((err)=>{
          alert('해당 복용 시간은 이미 등록되었습니다.');
          console.log(err);
        })
    }

    function generateRandom() { //map 사용시 고유아이디 필요해서 랜덤 함수 생성
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }


    return (
        <div className="TimeSetFormWrapper">
            <form onSubmit={handleSubmit}>
                <div className="TimeSetFormTitle">
                    <h1>기기 시간 설정</h1>
                </div>
                <div className="TimeSetFormSection">
                    <InputWithLabel input label="주민등록번호" onChange={handletimeRRNChange} type="text" placeholder="xxxxxx-xxxxxxx" />
                    <InputWithLabel input label="날짜" onChange={handleDateChange} type="date" placeholder="xxxx.xx.xx" />
                    <InputWithLabel input label="시간" onChange={handleTimeChange} type="time" placeholder="00시 00분" />


                    <FormControl sx={{marginTop: 5, minWidth: 400}} size="small" >
                    <InputLabel id="demo-simple-select-label">복용 약품명</InputLabel>
                        {/* <div className="NameOfMedicineLabel">복용 약품명</div> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={timeMedicine}
                            label="Medicine"
                            onChange={handleTimeMedicineChange}>
                            {data.map((item) => { //약품 등록 리스트에서 등록된 약품명 가져와서 목록 출력
                                return (
                                    <MenuItem key = {generateRandom()} value={item.medicine}>{item.medicine}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>

                    <button className="newTimeSetButton" type='submit'>등록</button>
                </div>
            </form>
        </div>
    )
}

export default TimeSet;