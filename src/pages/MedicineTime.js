//약 복용 시간 정보 조회 페이지


import * as React from 'react';
import './css/MedicineTime.css';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';

export default function MedicineTime() {

    const [data, setData] = useState([]) 

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) {
            axios.get('http://localhost:5000/medicineTime/list')
                .then((res)=>{
                    setData(res.data);
                    console.log(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const columns = [ //약 복용 시간 데이터의 속성
    { 
        field: 'RRN', 
        headerName: '주민등록번호', 
        width: 120 
    },
    { 
        field: 'time', 
        headerName: '복용 시간', 
        width: 150, 
        editable: true
    },
    { 
        field: 'date', 
        headerName: '복용 날짜', 
        width: 170 },
    { 
        field: 'medicine', 
        headerName: '복용 약품명', 
        width: 150 },
    { 
        field: 'medicine_check', 
        headerName: '복용 여부', 
        width: 150 },
    {
        field: 'action',
        headerName: '삭제',
        wedth: 150,
        renderCell: (params) => {
            return ( 
                //Delete 아이콘을 누르면 handleDelete 함수가 호출됨. 
                //Delete 버튼은 state에 있는 값을 삭제.(dummyData 내용은 그대로임)
                <>
                <DeleteOutline className="medicineTimeListDelete" onClick={()=> handleDelete(params.row.RRN, params.row.time, params.row.date)}/>
                </>
            )
        }
    }
    ];
    
    const handleDelete = (RRN, time, date) => { 
        axios.post('http://localhost:5000/medicineTime/delete', {
            RRN : RRN,
            time : time,
            date : date.substr(0,10)
        })
        .then((res)=>{
          if(res.status===200){
            console.log(RRN);
            console.log(time);
            console.log(date.substr(0,10));
            alert('약 복용 시간이 삭제되었습니다.');
            window.location.replace("/MedicineTime");
          }
        }).catch((err)=>{
          alert('해당 복용 시간을 삭제할 수 없습니다.');
          console.log(err);
        })
    }

    //grid 출력을 위해서 고유 아이디가 필요한데 임의로 생성해서 고유 아이디 부여
    function generateRandom() {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    return (
    <div className="medicineTimeEditWrapper">
        <div className="medicineTimeEditTitle">
            <h2>약 복용 시간 조회</h2>
        </div>
        <div className="search_container">
            <div className="medicine_time_search">
                검색창
            </div>
        </div>
        <div className="medicine_time_container">
            <div className="medicine_time_list">
                <Box sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        getRowId={(row) =>  generateRandom()}
                    />
                </Box>
            </div>
        </div>

    </div>
    )
}
