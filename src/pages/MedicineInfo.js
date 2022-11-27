//약품 정보 수정 페이지


import React from 'react';
import './css/MedicineInfo.css';

const MedicineInfo = () => {
    return (
      <div className="MedicineInfoWrapper">
      <h2>약 정보 수정 페이지입니다.</h2>
      <div className="MedicineInfoSection">
          <fieldset>
              <legend>약품 정보 수정</legend>
              <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>약품명</th>
                          <td><input className="inputSize" label="약품명" type="text" placeholder="예) 노브카핀정" /></td>
                      </tr>
                      <tr>
                          <th>1일 권장 용량</th>
                          <td><input className="inputSizeSmall" label="1일 권장 용량" type="number" placeholder="1" /></td>
                      </tr>
                      <tr>
                          <th>1일 투약 횟수</th>
                          <td><input className="inputSizeSmall" label="1일 투약 횟수" type="number" placeholder="1" /></td>
                      </tr>
                      <tr>
                          <th>무게</th>
                          <td><input className="inputSizeSmall" label="무게" type="text" placeholder="0.5" /></td>
                      </tr>
                      <tr>
                          <th>기타</th>
                          <td><input className="inputSizeBig" label="메모" type="text" placeholder="없음" /></td>
                      </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
              </table>
          </fieldset>
      </div>
  </div>
    )
}

export default MedicineInfo;