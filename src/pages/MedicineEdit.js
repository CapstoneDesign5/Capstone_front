//약품 정보 조회 페이지


import * as React from 'react';
import './css/MedicineEdit.css';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { medicineRows } from '../dummyData';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';


export default function MedicineEdit() {

    const columns = [ //약품 데이터의 속성
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    { 
        field: 'medicineName', 
        headerName: '약품명', 
        width: 100, 
        editable: true
    },
    { 
        field: 'medicineCode', 
        headerName: '약품코드', 
        width: 120 },
    { 
        field: 'medicineWeight', 
        headerName: '약 무게(g)', 
        width: 150 },
    { 
        field: 'dosage', 
        headerName: '1회 투약량', 
        width: 150 },
    { 
        field: 'numberOfMedication', 
        headerName: '1일 투약횟수', 
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
    

    const [data, setData] = useState(medicineRows) //dummyData.js의 memberRows 데이터를 받아옴.
    const handleDelete = (id) => { //id를 받으면 기존 데이터 중 같은 id를 제거 후 나머지만 state 다시 저장 
        setData(data.filter((item) => item.id !== id))
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
                />
        </Box>
        </div>
    </div>
    )
}

