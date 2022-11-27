//고객 정보 수정 페이지


import React from 'react';
import './css/MemberInfo.css';

const MemberInfo = () => {
    return (
      <div className="MemberInfoWrapper">
      <h2>고객 정보 수정 페이지입니다.</h2>
      <div className="MemberInfoSection">
          <fieldset>
              <legend>고객 정보 수정</legend>
              <table>
                  <thead>
                  </thead>
                  <tbody>
                      <tr>
                          <th>주민등록번호</th>
                          <td><input className="inputSize" label="주민등록번호" type="text" /></td>
                      </tr>
                      <tr>
                          <th>이름</th>
                          <td><input className="inputSizeSmall" label="이름" type="text"  /></td>
                      </tr>
                      <tr>
                          <th>주소</th>
                          <td><input className="inputSize" label="주소" type="text"  /></td>
                      </tr>
                      <tr>
                          <th>집 전화</th>
                          <td><input className="inputSize" label="집 전화" type="text"  /></td>
                      </tr>
                      <tr>
                          <th>휴대전화</th>
                          <td><input className="inputSize" label="휴대전화" type="text"  /></td>
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

export default MemberInfo;