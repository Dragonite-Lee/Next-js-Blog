import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "styles/Login.module.css";

function Login() {
    const [email, setEmail] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [pwValid, setPwValid] = useState<boolean>(false);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };
    useEffect(()=>{
        const regexEmail = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regexEmail.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
        const regexPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$:!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regexPw.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    },[email,pw])
  
    return (
      <div className={`${styles.loginPage}`}>
        <div className={`${styles.title_wrap}`}>
            My Blog
        </div>
        <div className={`${styles.login_wrap}`}>
            <div className={`${styles.input_wrap}`}>
                <input placeholder="이메일" value={email} onChange={handleEmail} className={`${styles.input}`} type="text" />
            </div>
            <div className={`${styles.inputError}`}>
                {
                    !emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요</div>
                    )
                }
            </div>
            <div className={`${styles.input_wrap}`}>
                <input placeholder="영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요" value={pw} onChange={handlePw} className={`${styles.input}`} type="password" />
            </div>
            <div className={`${styles.inputError}`}>
                {
                    !pwValid && pw.length > 0 && (
                        <div>영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요</div>
                    )
                }
            </div>
        </div>
        <div className={`${styles.button_wrap}`}>
            <button className={`${styles.button_login}`}>로그인</button>
        </div>
        <div className={`${styles.social_login_wrap}`}>
            <div className={`${styles.kakaosocial_login}`}>
                <Image 
                    src={require('public/kakao.png')}
                    alt="kakao로그인"
                    width={50}
                    height={50}
                />
                <div className={`${styles.social_login_text}`}>카카오 로그인</div>
            </div>
            <div className={`${styles.naversocial_login}`}>
                <Image 
                    src={require('public/naver.png')}
                    alt="naver로그인"
                    width={50}
                    height={50}
                />
                <div className={`${styles.naversocial_login_text}`}>네이버 로그인</div>
            </div>
            <div className={`${styles.googlesocial_login}`}>
                <Image 
                    src={require('public/google.png')}
                    alt="google로그인"
                    width={30}
                    height={30}
                />
                <div className={`${styles.googlesocial_login_text}`}>구글 로그인</div>
            </div>
        </div>
      </div>
    )
}
  
export default Login