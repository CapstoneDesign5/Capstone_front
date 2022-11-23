//약품 정보 조회 페이지


import * as React from 'react';
import './css/MedicineEdit.css';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';

export default function MedicineEdit() {

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

    const columns = [ //약품 데이터의 속성
    { 
        field: 'medicine', 
        headerName: '약품명', 
        width: 100, 
        editable: true
    },
    { 
        field: 'recommended_dose', 
        headerName: '1일 권장 용량(정)', 
        width: 120 },
    { 
        field: 'number_of_doses', 
        headerName: '1일 투약 횟수', 
        width: 150 },
    { 
        field: 'weight', 
        headerName: '무게(g)', 
        width: 150 },
    { 
        field: 'memo', 
        headerName: '기타', 
        width: 200 },
    {
        field: 'action',
        headerName: '수정/삭제',
        wedth: 150,
        renderCell: (params) => {
            return ( 
                //Edit 버튼을 누르면 /medicine/id 링크로 이동 
                //Delete 아이콘을 누르면 handleDelete 함수가 호출됨. 
                //Delete 버튼은 state에 있는 값을 삭제.(dummyData 내용은 그대로임)
                <>
                <Link to={'/medicine/' + params.row.id}> 
                <button className="medicineListEdit">Edit</button>
                </Link>
                <DeleteOutline className="medicineListDelete" onClick={()=> handleDelete(params.row.id)}/>
                </>
            )
        }
    }
    ];
    

    const [data, setData] = useState([]) //dummyData.js의 memberRows 데이터를 받아옴.
    const handleDelete = (id) => { //id를 받으면 기존 데이터 중 같은 id를 제거 후 나머지만 state 다시 저장 
        setData(data.filter((item) => item.id !== id))
    }
    

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
    <div className="medicineEdit">
        <h1>약품정보 조회</h1>
        <div className="medicineSearch">
            검색창
        </div>
        <div className="medicineList">
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
    )
}

