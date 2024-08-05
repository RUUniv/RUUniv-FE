import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NestAxios from '..';

export default function Example() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          Api 예제
        </div>

        <div className="contentWrap">
          <button className="bottomCard" onClick={()=>{navigate('/example/sendMail')}}>
            인증 메일 발송
          </button>
          <button className="bottomCard" onClick={()=>{navigate('/example/verify')}}>
            인증 메일 검증
          </button>
          <div className="contentWrap">
          <button className="bottomCard" onClick={()=>{navigate('/example/student/delete')}}>
            인증된 모든 학생 삭제
            </button>
            <button className="bottomCard" onClick={()=>{navigate('/example/student/delete/email')}}>
            인증된 특정 학생 삭제
            </button>
          </div>
          
          <div className="contentWrap">
          <button className="bottomCard"onClick={()=>{navigate('/example/checkSupportedUniv')}}>
            해당 대학이 지원 대학인지 확인
            </button>
            <button className="bottomCard" onClick={()=>{navigate('/example/getVerifiedStudents')}}>
            인증된 학생 조회
            </button>
          </div>
          <div className="contentWrap">
            <button className="bottomCard" onClick={()=>{navigate('/example/getAllSupportedUniv')}}>
            지원 대학 목록 조회
            </button>
            <button className="bottomCard"onClick={()=>{navigate('/example/error')}}>
            공통 에러
            </button>
          </div>
          <br/>
        </div>
      
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
        </div>
      
    );
}