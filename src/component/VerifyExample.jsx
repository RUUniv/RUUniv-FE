import { useNavigate } from 'react-router-dom';


export default function VerifyExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          인증 메일 검증 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          curl --request POST 
          <br/>
          --url 'https://ruuniv-server.xyz/v1/verification/email/verify' 
          <br/>
          --header 'ApiKey: 발급 받은 ApiKey'

        <div className="contentWrap">
            <p>Request Body</p>
            <hr/>
            &#123; <br/>  
                  &nbsp;&nbsp;"email": "인증 받을 이메일", <br/>
                  &nbsp;&nbsp;"universityName": "해당 이메일에 대한 대학", <br/>
                  &nbsp;&nbsp;"authCode" : "인증코드" <br/>
            &#125;
            
        </div>
          
        <div className="contentWrap">
            <p>Response Body</p>
            <hr/>
            &#123; <br />
            &nbsp;&nbsp;"message": "응답 메시지", <br />
            &nbsp;&nbsp;"data": &#123; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"email": "인증 받은 이메일", <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"universityName": "해당 이메일에 대한 대학", <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"isVerify": true <br />
                    &nbsp;&nbsp;&#125;<br/>
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