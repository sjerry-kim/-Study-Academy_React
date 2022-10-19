// 2022.10.13.(목)
// 클래스형 컴포넌트로 
// props 값을 login과 name을 받아와서
// login이 true일 때, 로그인에 성공하였습니다. name입니다 를 출력,
// false일 때, 로그인이 필요합니다를 출력하는 컴포넌트 작성

import { Component } from "react";

class MyLogin extends Component {
    render(){
        const {name, login} = this.props;
        return(
            <div>
                {
                    login == "true" ? ( // 문자열로 넣었기 때문에 true 여야만 true값을 반환
                        <div>
                            <h1>로그인에 성공하였습니다</h1>
                            <p>{name}입니다</p>
                        </div>
                    ) : (
                        <div>
                            <h1>로그인이 필요합니다</h1>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default MyLogin;