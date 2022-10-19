// 클래스형 컴포넌트

import React from "react";
import { Component } from "react";

class EventRefComp extends Component{
    constructor(props){
        super(props);
        // DOM을 저장할 변수 만들기
        this.textInput = null;
        // ref속성을 통해서 DOM 가져오기
        this.setTextInputRef = (element)=>{
            this.textInput = element;
            // 값이 들어갔는지 콘솔로 확인
            console.dir(this.textInput);
            // 값변경
            this.textInput.value= "안녕";
        }
        this.changeData = this.changeData.bind(this);

        // React.createRef를 통해 들고오기
        this.myRef = React.createRef();
        // 화살표함수를 사용하면 bind를 사용할 필요가 없다
        this.changeRefData = () => {
            // createRef를 통해 들고오면 current에 담겨서 온다
            this.myRef.current.focus();
        }
    }

    changeData(){
        // ref속성을 통해 가져온 DOM 객체는 
        // 자바스크립트에서 ID를 통해 가져온 것과 동일하게 사용할 수 있음
        this.textInput.focus();
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.setTextInputRef} />
                <button onClick={this.changeData}>이벤트 버튼</button>
                <button onClick={this.changeRefData} >CreateRef를 통해 가져온 DOM</button>
                <input type="text" ref={this.myRef} />
            </div>
        );
    }
}

export default EventRefComp;