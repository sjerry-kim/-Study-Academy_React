// 2022.10.13.(목)
// 클래스 컴포넌트
const { Component } = require("react")

class HelloComp extends Component{
    render(){
        // 비구조화/ 구조화 할당 : 객체나 배열의 값을 변수에다가 각각 할당
        // props의 값은 항상 string으로 들어옴.
        const {name, adress, num, children} = this.props;
        console.log(typeof parseInt(num)); // string으로 전달되기 때문에 형변환하여 사용해주어야 함.
        return(
            <div>
                <h1>{name}님 안녕하세요</h1>
                <p>{adress}에 살고 계시는군요</p>
                <p>{children}</p>
            </div>
        );
    }
}

export default HelloComp;