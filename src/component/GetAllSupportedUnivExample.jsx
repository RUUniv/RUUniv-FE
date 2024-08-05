import { useNavigate } from 'react-router-dom';


export default function GetAllSupportedUnivExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          지원 대학 목록 조회 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          curl --request GET
          <br/>
          --url 'https://ruuniv-server.xyz/v1/verification/univ' 
          <br/>
          --header 'ApiKey: 발급 받은 ApiKey'

        <div className="contentWrap">
            <p>Request Body</p>
            <hr/>
            없음
            
        </div>
          
        <div className="contentWrap">
            <p>Response Body</p>
            <hr />
            &#123; <br />
            &nbsp;&nbsp;"message": "응답 메시지", <br />
            &nbsp;&nbsp;"data": 
                    &nbsp;&nbsp;&nbsp;&nbsp;&#91; <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울시립대학교<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ... <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#93;<br/>
            &nbsp;&nbsp;"isSuccess": true <br/>
            &#125;
        </div>
        <br/>
        </div>
      
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
        </div>
      
    );
}