// 클래스형 컴포넌트

import { Component } from "react";

class EventChangeComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "hi",
            name: "홍길동",
        }
        this.onChange = this.onChange.bind(this);
    }

    // 실습1.onChange 메소드를 만들어서 확인하기
    onChange(e){
        // this.setState({message : e.target.value});
        // 객체의 속성이름을 변수로 가져오고 싶을 때 [변수]로 사용
        this.setState({[e.target.name] : e.target.value});
    }

    render(){
        return(
        <div>
            {/* h1태그에 input으로 작성한 내용 출력하기*/}
            <h1>글을 입력하세요</h1>
            <input type="text" onChange={
                (e) => {
                    console.log(e.target.value);
                    this.setState({message: e.target.value});
                }
            } />
            <p>{this.state.message}</p>

            {/* 실습1. onChange 메소드를 만들어서 확인하기 */}
            <h1>write somethin'</h1>
            <input type="text" name="message" onChange={this.onChange} />
            <p>{this.state.message}</p>
            <input type="text" name="name" onChange={this.onChange} />
            <p>{this.state.name}</p>
        </div>
        );
    }
}

export default EventChangeComp;