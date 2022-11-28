//약품 정보 수정 페이지


import React,{useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/MedicineInfo.css';

const MedicineInfo = () => {
    const {medicine} = useParams();

    useEffect(()=>{
        if(localStorage.getItem('isLogined')) { 
            axios.post('http://localhost:5000/medicineManagement/Info', {
                medicine : medicine
            })
            .then((res)=>{
                setRecommendedDose(res.data[0].recommended_dose); //상단 관리자 정보 출력을 위해서 저장
                setNewRecommendedDose(res.data[0].recommended_dose); //입력폼이 공백이면 기존의 정보를 서버로 넘겨주기 위해서 저장
                //입력폼의 값이 변경된 경우 관리자 정보가 변경되기 전에는 상단 관리자 정보 출력 부분의 데이터를 변경시키지 않기 위해
                //New를 붙여서 기존의 관리자 정보와 새로운 관리자 정보를 따로 관리
                setNumberDoses(res.data[0].number_of_doses);
                setNewNumberDoses(res.data[0].number_of_doses);
                setWeight(res.data[0].weight);
                setNewWeight(res.data[0].weight);
                setMemo(res.data[0].memo);
                setNewMemo(res.data[0].memo)
            })
            .catch((err)=>{
                console.log(err);
            })
        }else{
            alert('로그인이 필요합니다.');
            window.location.replace("/Login");
        }
    },[]);

    const [recommendedDose, setRecommendedDose] = useState("");
    const [numberDoses, setNumberDoses] = useState("");
    const [weight, setWeight] = useState("");
    const [memo, setMemo] = useState("");

    const [newRecommendedDose, setNewRecommendedDose] = useState(recommendedDose);
    const [newNumberDoses, setNewNumberDoses] = useState(numberDoses);
    const [newWeight, setNewWeight] = useState(weight);
    const [newMemo, setNewMemo] = useState(memo);

    const handleNewRecommendedDoseChange = (event) => {
        setNewRecommendedDose(event.target.value);
    }
  
    const handleNewNumberDosesChange = (event) => {
        setNewNumberDoses(event.target.value);
    }
  
    const handleNewWeightChange = (event) => {
        setNewWeight(event.target.value);
    }
  
    const handleNewMemoChange = (event) => {
        setNewMemo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/medicineManagement/Update', {
            medicine : medicine,
            recommended_dose : newRecommendedDose,
            number_of_doses : newNumberDoses,
            weight : newWeight,
            memo : newMemo
        }).then((res)=>{
          if(res.status===200){
            alert('약품 정보 변경 성공');
            window.location.replace("/medicineEdit");
          }
        }).catch((err)=>{
          alert('약품 정보 변경 실패');
          console.log(err);
        })
      }

    return (
      <div className="MedicineInfoWrapper">
      <h2>약 정보 수정 페이지입니다.</h2>
      <div className="MedicineInfoSection">
          <fieldset>
              <legend>약품 정보 수정</legend>
              <form onSubmit={handleSubmit}>
              <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>1일 권장 용량</th>
                          <td><input className="inputSizeSmall" label="1일 권장 용량" type="number" placeholder={recommendedDose} onChange={handleNewRecommendedDoseChange} /></td>
                      </tr>
                      <tr>
                          <th>1일 투약 횟수</th>
                          <td><input className="inputSizeSmall" label="1일 투약 횟수" type="number" placeholder={numberDoses} onChange={handleNewNumberDosesChange} /></td>
                      </tr>
                      <tr>
                          <th>무게</th>
                          <td><input className="inputSizeSmall" label="무게" type="text" placeholder={weight} onChange={handleNewWeightChange} /></td>
                      </tr>
                      <tr>
                          <th>기타</th>
                          <td><input className="inputSizeBig" label="메모" type="text" placeholder={memo} onChange={handleNewMemoChange} /></td>
                      </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
              </table>
              <button>변경</button>
              </form>
          </fieldset>
      </div>
  </div>
    )
}

export default MedicineInfo;