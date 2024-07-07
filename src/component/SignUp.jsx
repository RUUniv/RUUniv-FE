import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NestAxios from '..';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate()
  
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
    
    async function onClickSignUp() {
      const info = {
      email: email,
      password : pw
    }
    try {
      const response = await NestAxios.post("/auth/signUp", info)
      
      await localStorage.setItem("accessToken", response.data.accessToken)
      await localStorage.setItem("refreshToken",response.data.refreshToken)

      navigate("/myInfo")
    } catch (error) {
      console.error(error)
      alert("중복된 이메일 입니다")

    }
      
    }

    return (
      <div className="page">
        <div className="titleWrap">
          회원가입
          <br />
          이메일과 비밀번호를 입력해주세요
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
              value={pw}
              onChange={handlePassword}
            />
          </div>
        
        </div>
        
          <button onClick={()=>{navigate(-1)}} className="bottomButton">
            뒤로가기
          </button>
          <button onClick={onClickSignUp} disabled={notAllow} className="bottomButton">
            확인
          </button>
          
        </div>
      
    );
}