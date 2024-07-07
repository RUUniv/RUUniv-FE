import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import NestAxios from '..';

export default function ApiKeyManagerStudentRegistry() {
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');

  
  const navigate = useNavigate()
  const location = useLocation()
  
    
  async function onClickRegistryStudent() {
    const info = {
      email: email,
      universityName: university
    }

    console.log(info)
    const response = await NestAxios.post("/manager/student/registry", info, { headers: { ApiKey: location.state.apiKey } })
    alert("등록되었습니다.")
  }

    return (
      <div className="page">
        <div className="titleWrap">
          학생등록
          <br />
          이메일과 비밀번호를 입력해주세요
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        
          <div style={{ marginTop: "26px" }} className="inputTitle">
            대학교
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
        
        </div>
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
          <button onClick={onClickRegistryStudent} className="bottomButton">
            확인
          </button>
          
        </div>
      
    );
}