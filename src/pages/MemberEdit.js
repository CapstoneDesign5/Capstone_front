//고객 정보 조회 및 수정 페이지


import * as React from 'react';
import './css/MemberEdit.css';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { memberRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';


export default function MemberEdit() {

    const columns = [ //고객 데이터의 속성
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    { 
        field: 'memberName', 
        headerName: '이름', 
        width: 100, 
        editable: true
    },
    { 
        field: 'dateOfBirth', 
        headerName: '생년월일', 
        width: 120 },
    { 
        field: 'email', 
        headerName: 'Email', 
        width: 150 },
    { 
        field: 'phone', 
        headerName: '휴대전화', 
        width: 150 },
    { 
        field: 'address', 
        headerName: '주소', 
        width: 200 },
    {
        field: 'action',
        headerName: '수정/삭제',
        wedth: 150,
        renderCell: (params) => {
            return ( 
                //Edit 버튼을 누르면 /member/id 링크로 이동 
                //Delete 아이콘을 누르면 handleDelete 함수가 호출됨. 
                //Delete 버튼은 state에 있는 값을 삭제.(dummyData 내용은 그대로임)
                <>
                <Link to={'/member/' + params.row.id}> 
                <button className="memberListEdit">Edit</button>
                </Link>
                <DeleteOutline className="memberListDelete" onClick={()=> handleDelete(params.row.id)}/>
                </>
            )
        }
    }
    ];
    

    const [data, setData] = useState(memberRows) //dummyData.js의 memberRows 데이터를 받아옴.
    const handleDelete = (id) => { //id를 받으면 기존 데이터 중 같은 id를 제거 후 나머지만 state 다시 저장 
        setData(data.filter((item) => item.id !== id))
    }
    


    return (
    <div className="memberEdit">
        <h1>고객정보 조회</h1>
        <div className="memberSearch">
            검색창
        </div>
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
                />
        </Box>
        </div>
    </div>
    )
}

