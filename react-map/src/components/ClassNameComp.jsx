// 클래스형 컴포넌트
import { Component } from "react";
import './css/ClassNameComp.css';

class ClassNameComp extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    active : false,
    classList : "on",
  }
  render() { 
    return ( 
      <div>
        <button onClick={()=>{
          this.setState({active : !this.state.active})
          if(this.state.classList === "on"){
            this.setState({classList : "off"})
          }else{
            this.setState({classList : "on"})
          }
        }}>ActiveToggle</button>
        <ul>
          <li className="on">활성화된 리스트입니다</li>
          <li className={this.state.active? "on":"off"}>비활성화된 리스트입니다</li>
          <li className={this.state.classList}>활성화된 리스트입니다</li>
        </ul>
      </div>
    );
  }
} 

export default ClassNameComp;