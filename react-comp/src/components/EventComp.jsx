// 2022.10.13.(목)
// 클래스형 컴포넌트 이벤트
import {Component} from 'react';

class EventComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            num: 1,
        }
        this.handleClick = this.handleClick.bind(this); // bind로 this를 찾을 수 있게 잡아줘야 함
        this.numDouble = this.numDouble.bind(this);
    }

    //  메소드로만 사용하면 this의 위치를 찾지 못해서 오류발생 : this를 bind로 연결
    handleClick(){
        // 실행하는 공간이 바뀌어서 값을 가져오는 곳이 바뀜
        // render() :render안에서 가져온 this.state 로 접근
        // 메소드 : constructor에서 가져온 this.state. 로 접근
        this.setState({
            isToggleOn : !this.state.isToggleOn})
        console.log("확인");
    }

    // 값을 두 배로 만들어주는 함수(메소드)
    numDouble(){
        this.setState({num : this.state.num*2})
    }

    render(){
        const{isToggleOn, num} = this.state;
        return(
            <div>
                <button onClick={ this.handleClick }>{isToggleOn ? "on" : "off"}</button>
                {/* num이라는 숫자값을 추가해서, 버튼을 클릭할 때마다 2배로 늘어날 수 있게  */}
                <button onClick={ this.numDouble }>{num}</button>
            </div>
        );
    }
}

export default EventComp;