import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NestAxios from '..';
export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const navigate = useNavigate()
    
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate('/myInfo')
    }
  })

  useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };
    
    const handlePassword = (e) => {
      setPw(e.target.value);
      setPwValid(true)
    };
      
  async function onClickConfirmButton() { 
    
    const info = {
      email: email,
      password : pw
    }
    try {
      const response = await NestAxios.post("/auth/signIn", info)
      const data = response.data;
      
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      
      navigate("/myInfo")
    } catch (error) {
      console.error(error)
      alert("잘못된 정보입니다.")
      
    }
    
  };
  
  const navigateSignUp = () => {
      navigate("/signUp")
    }

    return (
      <div className="page">
        <div className="titleWrap">
          R U Univ ? (대학생 인증 API)
          <br/>
          120개 대학 지원 !
          <hr />
          이메일과 비밀번호를
          <br />
          입력해주세요
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder='****'
              value={pw}
              onChange={handlePassword}
            />
          </div>
          <div className="errorMessageWrap">
          </div>
        </div>
        
        <div>
          <button onClick={() => {navigate('/example')}} className="bottomButton">
            예제
          </button>
          <button onClick={() => {navigate('/contact')}} className="bottomButton">
            Contact
          </button>
          <button className="bottomButton" onClick={navigateSignUp} >회원가입</button>
        </div>
        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            로그인
          </button>
        </div>
      </div>
    );
}