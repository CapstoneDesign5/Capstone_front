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
                setName(res.data[0].name); //상단 관리자 정보 출력을 위해서 저장
                setNewName(res.data[0].name); //입력폼이 공백이면 기존의 정보를 서버로 넘겨주기 위해서 저장
                //입력폼의 값이 변경된 경우 관리자 정보가 변경되기 전에는 상단 관리자 정보 출력 부분의 데이터를 변경시키지 않기 위해
                //New를 붙여서 기존의 관리자 정보와 새로운 관리자 정보를 따로 관리
                setPhoneNum(res.data[0].phone_num);
                setNewPhoneNum(res.data[0].phone_num);
                setEmail(res.data[0].e_mail);
                setNewEmail(res.data[0].e_mail);
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

    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");

    const [newManagerid, setNewManagerId] = useState(localStorage.getItem('isLogined'));
    const [newName, setNewName] = useState(name);
    const [newPhoneNum, setNewPhoneNum] = useState(phoneNum);
    const [newEmail, setNewEmail] = useState(email);

    const handleNewIdChange = (event) => {
        setNewManagerId(event.target.value);
    }
  
    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }
  
    const handlePhoneNumChange = (event) => {
        setNewPhoneNum(event.target.value);
    }
  
    const handleEmailChange = (event) => {
        setNewEmail(event.target.value);
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newName);
        axios.post('http://localhost:5000/manager/update/'+localStorage.getItem('isLogined'), {
            newId : newManagerid,
            name : newName,
            phone_num : newPhoneNum,
            e_mail : newEmail
        }).then((res)=>{
          if(res.status===200){
            alert('관리자 정보 변경 성공');
            if(localStorage.getItem('isLogined') != newManagerid) {
                localStorage.removeItem('isLogined');
                localStorage.removeItem('isLoginPassword');
                window.location.replace("/Login");
            }
            else {
                window.location.replace("/profileEdit");
            }
          }
        }).catch((err)=>{
          alert('관리자 정보 변경 실패');
          console.log(err);
        })
      }

    return (
        <div className="ProfileEditFormWrapper">
            <h2>개인정보 관리</h2>
            <form onSubmit={handleSubmit}>
                <div className="profile_info_container">
                <h3 id="profile_edit_h3">Profile</h3>    
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
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        {localStorage.getItem('isLogined')}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        아이디 변경을 원하시면 하단 아이디 폼에 새로운 아이디를 입력해주세요.
                                        입력 폼이 공백일 경우 기존의 정보가 그대로 유지됩니다. <br></br>
                                        * 비밀번호 변경은 '메뉴 - 비밀번호 변경'에서 가능합니다.
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
                                        {name}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        관리자 이름 변경을 원하시면 하단 이름 폼에 새로운 정보를 입력해주세요.
                                        입력 폼이 공백일 경우 기존의 정보가 그대로 유지됩니다.<br></br>
                                        * 비밀번호 변경은 '메뉴 - 비밀번호 변경'에서 가능합니다.
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
                                        {phoneNum}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        휴대폰 번호 변경을 원하시면 하단 휴대전화번호 폼에 새로운 휴대폰 번호를 입력해주세요.
                                        입력 폼이 공백일 경우 기존의 정보가 그대로 유지됩니다. <br></br>
                                        * 비밀번호 변경은 '메뉴 - 비밀번호 변경'에서 가능합니다.
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
                                        {email}
                                    </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        이메일 변경을 원하시면 하단 이메일 폼에 새로운 이메일을 입력해주세요.
                                        입력 폼이 공백일 경우 기존의 정보가 그대로 유지됩니다. <br></br>
                                        * 비밀번호 변경은 '메뉴 - 비밀번호 변경'에서 가능합니다.
                                    </Typography>
                                    </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="profile_edit_container">
                <h3 id="profile_edit_h3">개인정보 변경</h3>
                <h5 id="profile_edit_h6">*변경하실 정보를 입력하세요.</h5>
                <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th className='profile_edit_th'>이름</th>
                          <td><input className="inputSizeSmall" type="text" onChange={handleNameChange}/></td>
                      </tr>
                      <tr>
                          <th className='profile_edit_th'>휴대전화번호</th>
                          <td>
                            <input className="inputSizeSmall" type="text" onChange={handlePhoneNumChange}/>
                          </td>
                      </tr>
                      <tr>
                          <th className='profile_edit_th'>아이디</th>
                          <td><input className="inputSizeSmall" type="text" onChange={handleNewIdChange}/></td>
                      </tr>
                      <tr>
                          <th className='profile_edit_th'>E-mail</th>
                          <td><input className="inputSizeSmall" type="text" onChange={handleEmailChange}/></td>
                      </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
                    </table>
                    <button className="submit_btn">변경</button>
                </div>
            </form>
        </div>

    )
}

export default ProfileEdit;