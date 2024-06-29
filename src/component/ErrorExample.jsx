import { useNavigate } from 'react-router-dom';


export default function ErrorExample() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          에러 예제
        </div>
        
        <div className="bodyWrap">
          <div className="contentWrap">
            <p>Error : ApiKey 입력 없음 </p>
            <hr/>
            &#123; <br/>
              &nbsp;&nbsp;"message": "NULL API KEY",<br/>
              &nbsp;&nbsp;"error": "Not Found", <br/>
              &nbsp;&nbsp;"statusCode": 404 <br/>
            &#125;
        </div>
        <div className="contentWrap">
            <p>Error : 부정확한 ApiKey </p>
            <hr/>
            &#123; <br/>
              &nbsp;&nbsp;"message": "INVALID API KEY",<br/>
              &nbsp;&nbsp;"error": "Not Found", <br/>
              &nbsp;&nbsp;"statusCode": 404 <br/>
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