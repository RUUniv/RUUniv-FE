import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import NestAxios from '..';
import { AxiosError } from 'axios';

export default function ApiKeyManager() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()
  let [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");

  async function getStudents() {
      const students = await NestAxios.get("/manager/student", { headers: { ApiKey: location.state.apiKey } })
      setStudents(students.data)
  }
  useEffect(() => {
    getStudents()
  },[]);
  
  async function onClickRegistryStudent() {
    
  }

  async function onClickDeleteStudent(id) {
    if (window.confirm("삭제하시겠습니까 ? ")) {
        try {
          await NestAxios.delete("/manager/student/" + id, { headers: { ApiKey: location.state.apiKey } })
          await getStudents()
          alert("삭제완료")  
      } catch (error) {
        console.error("Failed to Delete API key:", error.code); 
        alert("로그인을 해주세요")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        navigate('/')
      }
    } else {
    }
  }

    return (
      <div className="page">
        <div className="titleWrap">
          API Key 관리
        </div>

        <div className="contentWrap">
          <div className='asd'>
            {students.map(key=> (
                        <div key={key.id}>
                <div>학생: {key.email}
                  <button onClick={() => { onClickDeleteStudent(key.id) }}>삭제</button>
                </div> 
                
                        </div> 
                    ))}
          </div>
        </div>
        <div>
          {

          }
        </div>
        <div>
          <button onClick={() => {navigate(-1)}} className="bottomButton">
            뒤로
          </button>
          <button onClick={() => {navigate('/example')}} className="bottomButton">
            예제
          </button>
          <button onClick={() => {navigate('/registry',{
              state: {
              apiKey: location.state.apiKey,
              id : location.state.id,
            }})}} className="bottomButton">
            학생등록
          </button>
        </div>
      </div>
    );
}