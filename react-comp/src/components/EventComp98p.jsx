// 클래스형 컴포넌트
// 생활코딩 리액트 98p 내용 비교
import {Component} from "react";

class EventComp98p extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode : "Start",
        }
    }

    render(){
        return(
            <div>
                <h1>
                    <a href="/" onClick={
                        function(e){
                            e.preventDefault(); //새로고침 제거
                            // 이때까지는 setState로 접근->값 수정
                            // 아래는 state에 .으로 직접 접근해서 수정
                            // this.state.mode = "Welcome"
                            // 리액트 내부에서 직접접근해서 수정하는 것을 막고있음
                        }.bind(this)
                        // StateComp.jsx와 비교를 하면
                        // 화살표함수와 익명함수로 인한
                        // this값이 달라짐 : ctrl 키로 확인
                    }>
                        {this.state.mode}
                    </a>
                </h1>
            </div>
        );
    }
}

export default EventComp98p;