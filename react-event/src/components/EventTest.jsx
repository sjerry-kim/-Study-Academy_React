// 클래스형 컴포넌트
import React, { Component } from "react";
import EventTestLoginForm from "./EventTestLoginForm";

class EventTest extends Component {
  constructor(props) {
    super(props);
    // state , name="", login=false, (다른 변수 추가 가능)
    // input에 값을 넣은 후 > name의 값이 input의 value값으로
    // button을 클릭하면 login을 true로 만들고,
    // name이 출력되는 h1태그를 작성하세요
    // false 일때는 h1태그가 출력되지 않음(삼항연산자 또는 &&연산자 참고)
    this.state = {
      name: "",
      login: false,
    };
  }
  render() {
    return (
      <div>
        {/* input에 값을 넣은 후 > name의 값이 input의 value값으로 */}
        {this.state.login ? (
          <h1>{this.state.name}</h1>
        ) : 
        // 자식 컴포넌트의 값을 부모로 올라와서 확인해야 하기 때문에
        // 현재로서는 확인이 불가능하다 - 차후 리덕스를 통해서 확인할 예정
        // ( <EventTestLoginForm />)}
        (
          <div>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <button
              onClick={() => {
                this.setState({ login: true });
              }}
            >
              로그인
            </button>
          </div>
        )
        }
      </div>
    );
  }
}

export default EventTest;
