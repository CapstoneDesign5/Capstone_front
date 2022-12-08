//고객 정보 조회 및 수정 페이지


import * as React from 'react';
import './css/MemberEdit.css';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';

export default function MemberEdit() {

    const [data, setData] = useState([]) 

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) {
            axios.get('http://localhost:5000/customer/list')
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

    const columns = [ //고객 데이터의 속성
    { 
        field: 'RRN', 
        headerName: '주민등록번호', 
        width: 120 
    },
    { 
        field: 'address', 
        headerName: '주소', 
        width: 150, 
        editable: true
    },
    { 
        field: 'landline_phone', 
        headerName: '집전화', 
        width: 120 },
    { 
        field: 'manager_id', 
        headerName: '관리자 번호', 
        width: 150 },
    { 
        field: 'name', 
        headerName: '이름', 
        width: 150 },
    { 
        field: 'phone_num', 
        headerName: '휴대전화', 
        width: 200 },
    {
        field: 'remark', 
        headerName: '특이사항', 
        width: 200 },
    {
        field: 'action',
        headerName: '수정/삭제',
        wedth: 150,
        renderCell: (params) => {
            return ( 
                //Edit 버튼을 누르면 /memberinfo/RRN 링크로 이동 
                //Delete 아이콘을 누르면 handleDelete 함수가 호출됨. 
                <>
                <Link to={'/MemberInfo/' + params.row.RRN}> 
                <button className="memberListEdit">Edit</button>
                </Link>
                <DeleteOutline className="memberListDelete" onClick={()=> handleDelete(params.row.RRN)}/>
                </>
            )
        }
    }
    ];
    
    const handleDelete = (RRN) => { 
        axios.delete('http://localhost:5000/customer/delete/'+RRN)
        .then((res)=>{
          if(res.status===200){
            alert('회원 정보가 삭제되었습니다.');
            window.location.replace("/memberEdit");
          }
        }).catch((err)=>{
          alert('해당 회원 정보를 삭제할 수 없습니다.');
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
    <div className="memberEditWrapper">
        <div className="memberEditTitle">
            <h2>고객정보 조회</h2>
        </div>
        <div className="search_container">
            <div className="member_search">
                <search> 검색창</search>
            </div>
        </div>
        <div className="member_container">
            <div className="memberList">
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

