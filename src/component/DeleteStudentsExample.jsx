import { useNavigate } from 'react-router-dom';


export default function DeleteStudentsExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          인증된 모든 삭제 삭제 예제
        </div>
        
        <div className="bodyWrap">
          <p>Api 요청 예시</p>
          <hr/>
          curl --request DELETE
          <br/>
          --url 'https://ruuniv-server.xyz/v1/verification/email' 
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
            &#123; <br />
            &nbsp;&nbsp;"message": "응답 메시지", <br />
            &nbsp;&nbsp;"data": &#123; <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;"isDelete": true<br />
                    &nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;"isSuccess": true <br/>
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