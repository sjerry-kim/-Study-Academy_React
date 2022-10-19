import { Component } from "react";

class EventTestLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name : "aa",
      login : false,
    }
  }

  render() { 
    return ( 
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
      );
  }
}

export default EventTestLoginForm;