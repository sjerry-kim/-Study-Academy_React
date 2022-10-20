import { useState } from "react";
import LoginFormComp from "./LoginFormComp";

const LoginComp = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");

  return (
    <div>
      {/* 로그인이 false일 때 로그인창, true일 때 인사창 */}
      {
        login? (<h1>Welcome, {name}!</h1>) :
        // props 값으로 set 메소드를 전달
        <LoginFormComp setLogin={setLogin} setName={setName}/> 
      }
    </div>
  );
}

export default LoginComp;