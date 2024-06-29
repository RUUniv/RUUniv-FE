import { useNavigate } from 'react-router-dom';


export default function DeleteStudentsExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          인증 메일 검증 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          curl --request DELETE
          <br/>
          --url 'http://localhost:3000/v1/verification/email/verify' 
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
            &#123; <br/>
                  &nbsp;&nbsp;"isDelete": true<br />
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