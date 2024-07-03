import { useNavigate } from 'react-router-dom';


export default function GetAllSupportedUnivExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          지원 학교 목록 조회 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          curl --request GET
          <br/>
          --url 'https://ruuniv-server.xyz/v1/verification' 
          <br/>
          --header 'ApiKey: 발급 받은 ApiKey'

        <div className="contentWrap">
            <p>Request Body</p>
            <hr/>
            없음
            
        </div>
          
        <div className="contentWrap">
            <p>Response Body</p>
            <hr/>
            &#91; <br/>
              &nbsp;&nbsp;서울시립대학교<br />
              &nbsp;&nbsp; ... <br />
              &nbsp;&nbsp; ... <br />
            &#93;
        </div>
        <br/>
        </div>
      
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
        </div>
      
    );
}