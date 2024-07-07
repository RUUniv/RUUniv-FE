import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NestAxios from '..';
import { AxiosError } from 'axios';

export default function MyInfo() {
    
  const [apiKeys, setApiKeys] = useState([]);
  const navigate = useNavigate()


  async function getApiKeys() {
    try {
      const apiKeys = await NestAxios.get("/users/me/apiKey", { headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") } })
      setApiKeys(apiKeys.data);
    } catch (error) {
      console.error("Failed to Delete API key:", error.code);
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      alert("로그인을 해주세요")
      navigate('/')
    }
  }
  useEffect(() => {
    getApiKeys()
  },[]);
  
  async function onClickCreateApiKey() {
    try {
      const response = await NestAxios.post("/users/me/apiKey",null,{ headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") } })
      const data = await response.data;
      console.log(data)
        setApiKeys(apiKey => {
          apiKey.push(data);
          return apiKey
        });
      await getApiKeys()
    } catch (error) {
      if (error.response.status == '401') {
        console.error("Failed to Delete API key:", error.code);
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        alert("로그인을 해주세요")
        navigate('/')
      }
      alert("API키의 최대 개수는 3개입니다.")
    }
  }

  async function onClickDeleteApiKey(id) {
    if (window.confirm("삭제하시겠습니까 ? ")) {
        try {
          await NestAxios.delete("/users/me/apiKey/" + id, { headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") } })
        await getApiKeys()
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
  
  const logout = (() => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    navigate('/')
  });

  const goManager = ((apiKey ,id) => {
    navigate('/manager', {
      state: {
        apiKey: apiKey,
        id : id
    }})
  })

    return (
      <div className="page">
        <div className="titleWrap">
          내 정보
        </div>

        <div className="contentWrap">
          <div className='asd'>
            {apiKeys.map(key=> (
                        <div key={key.id}>
                <div>API Key: {key.apiKey}
                  <button onClick={() => { onClickDeleteApiKey(key.id) }}>삭제</button>
                  <button onClick={() => { navigator.clipboard.writeText(key.apiKey); }}>복사</button>
                  <button onClick={() => { goManager(key.apiKey,key.id)}}>관리</button>
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
          <button onClick={onClickCreateApiKey} className="bottomButton">
            API KEY 생성
          </button>
          <button onClick={() => {navigate('/example')}} className="bottomButton">
            예제
          </button>
          <button onClick={logout} className="bottomButton">
            로그아웃
          </button>
        </div>
      </div>
    );
}