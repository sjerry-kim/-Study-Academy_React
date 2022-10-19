// 2022.10.13.(목)
// 클래스형 컴포넌트에서 state
import {Component} from "react";

class StateComp extends Component{
    // props값을 this을 통해서 사용(state를 사용하지 않을 때)
    // state 컴포넌트에서 사용하는 값을 작성
    // >> props값은 Component에서 상속 받아온 값
    // >> 명시적으로 가져올 필요있음

    // 자바스크립트 클래스의 constructor() {}
    constructor(props){
        // constructor를 통해서 클래스의 속성관리
        super(props);
        // state는 객체의 형식으로 작성
        this.state = {
            number : 4,
            count : 0,
        }
    }
    render(){
        const {name} = this.props;
        const {number, count} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                {/* 1씩 증가하는 버튼 */}
                <button onClick={
                    ()=>{this.setState({number : number+1})}
                }> +1 </button>
                {/* 1씩 감소하는 버튼 */}
                <button onClick={
                    ()=>{this.setState({number : number -1})}
                }>-1</button>
                {/* 0으로 값을 리셋하는 버튼 */}
                <button onClick={
                    ()=>{this.setState({number: 0})} 
                }>reset to 0</button>

                <h1>{count}</h1>
                <button onClick={
                    ()=>{this.setState({count : count+1})}
                }> count +1 </button>
            </div>
        )
    }
}

export default StateComp;