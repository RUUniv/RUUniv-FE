import { useNavigate } from 'react-router-dom';


export default function CheckSupportedUnivExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          지원 대학 확인 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          curl --request GET
          <br/>
          --url 'http://localhost:3000/v1/verification/&#123;univName&#125;' 
          <br/>
          --header 'ApiKey: 발급 받은 ApiKey'
        
        <div className="contentWrap">
            <p>PathParameter</p>
            <hr/>
            univName - 대학교 이름 (서울시립대학교)
            
        </div>
          
        <div className="contentWrap">
            <p>Response Body</p>
            <hr/>
            &#123; <br/>
              &nbsp;&nbsp;"universityName": "서울시립대학교",<br />
              &nbsp;&nbsp;"isSupported": true<br />
            &#125;
            
        </div>

        <div className="contentWrap">
            <p>Error : 지원하지 않는 대학</p>
            <hr/>
            &#123; <br/>
              &nbsp;&nbsp;"message": "NOT_SUPPORTED_UNIVERSITY",<br/>
              &nbsp;&nbsp;"statusCode": 400 <br/>
            &#125;
            <br/>
        </div>
          
        </div>
      
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
        </div>
      
    );
}