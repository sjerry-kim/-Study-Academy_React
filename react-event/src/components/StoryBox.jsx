// 클래스형 컴포넌트
import { Component } from "react";
import StoryTitle from "./StoryTitle";
import StoryDescript from "./StoryDescript";

class StoryBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <div>
        <StoryTitle>제목입니다</StoryTitle>
        <StoryDescript visible={true}>본문내용입니다1</StoryDescript>
        <StoryDescript visible={false}>본문내용입니다2</StoryDescript>
      </div>
    );
  }
}

export default StoryBox;