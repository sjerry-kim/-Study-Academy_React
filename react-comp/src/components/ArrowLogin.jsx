// 2022.10.13.(목)
import {PropTypes} from "prop-types";

// 함수형 컴포넌트
const ArrowLogin = (props) => {
    const {login, name} = props;
    console.log(typeof login);
    return(
        <div>
            {
                login ? (
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
    )
}

export default ArrowLogin;

// porps의 자료형 설정
// import {PropTypes} from "prop-types";
// 위의 내용을 가져와서 설정할 수 있다
ArrowLogin.propTypes = { // 속성
    login : PropTypes.bool, // 위에서 가져옴
}

// props의 값이 들어오지 않았을 때 대체할 값
ArrowLogin.defaultProps = {
    name : "기본이름",
}