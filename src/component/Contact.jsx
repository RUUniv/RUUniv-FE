import { useNavigate } from 'react-router-dom';


export default function Contact() {
    const navigate = useNavigate()
    

    return (
      <div className="page">
        <div className="titleWrap">
          Contact
        </div>
        <div className="bodyWrap">
          <p>Email : rhtn1128@gmail.com</p>
          <br />
          <p>대학 메일 도메인을 알려주시면 바로바로 반영하겠습니다 !</p>
          <p>피드백 환영입니다 !</p>
          <br />
        </div>
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
        </div>
      
    );
}