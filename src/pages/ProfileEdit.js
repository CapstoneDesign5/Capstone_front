//관리자 프로필 정보 변경 페이지


import axios from 'axios';
import React,{useState ,useEffect} from 'react';
import Box from '@mui/material/Box';
import './css/ProfileEdit.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProfileEdit = () => {

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) { 
            axios.get('http://localhost:5000/manager/Info/'+localStorage.getItem('isLogined'))
            .then((res)=>{
                setManagerData(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const [expanded, setExpanded] = useState(false);
    const [managerData, setManagerData] = useState([]);

    // const [Managerid, setManagerId] = useState("");
    // const [name, setName] = useState("");
    // const [phoneNum, setPhoneNum] = useState("");
    // const [email, setEmail] = useState("");

    // const handleIdChange = (event) => {
    //     setManagerId(event.target.value);
    // }
  
    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // }
  
    // const handlePhoneNumChange = (event) => {
    //     setPhoneNum(event.target.value);
    // }
  
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost:5000/customer/register', {
    //       RRN:RRN,
    //       name:name,
    //       address:address,
    //       landline_phone:landline_phone,
    //       phone_num:phone_num,
    //       remark:remark,
    //       manager_id:manager_id
    //     }).then((res)=>{
    //       if(res.status===200){
    //         alert('회원 정보 등록 성공');
    //       }
    //     }).catch((err)=>{
    //       alert('회원 정보 등록 실패');
    //       console.log(err);
    //     })
    //   }

    return (
        <div className="ProfileEditFormWrapper">
                <div className="ProfileEditFormTitle">
                    <h1>개인정보 관리</h1>
                </div>
                {/* <form onSubmit={handleSubmit}> */}
                <div className="ProfileEditFormSection">
                    <Box sx={{ height: 220, width: 900, marginBottom: 5,}} >
                        <div className="ProfileBox">
                            {/* 관리자 프로필 ( 이메일, 이름 ) 들어가는 부분 */}
                            <label>관리자 프로필</label>
                            <div>
                                <Accordion sx={{marginTop:3}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        아이디
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>{managerData[0].id}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>이름</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {managerData[0].name}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                        laoreet.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        휴대폰 번호
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {managerData[0].phone_num}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>이메일</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {managerData[0].e_mail}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </Box>
                    <Box sx={{ marginTop: 0, height: 50, width: 900, border: 1, textAlign: 'center', paddingTop: 4}} >
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