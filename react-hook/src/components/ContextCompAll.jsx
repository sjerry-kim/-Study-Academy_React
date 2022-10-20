// useContext 사용 및 확인 위해 여러 개의 컴포넌트를 작성
// useContext의 데이터 관리 특성 
// : 리액트는 부모의 값을 props을 통해 계속해서 아래로 내려주는 형식으로 사용 
// 그러나 useContext를 사용하면 중간에 props 전해주는 것 없이 자손 컴포넌트에 값을 전해줄 수 있음

import React, { Component } from "react";
import { useContext } from "react";

// useContext를 통해서 공유할 값을 객체 형태로 작성
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  },
  blue: {
    foreground: "white",
    background: "blue"
  }

};
//  useContext를 통해서 값을 공유하기 위해 createContext 사용
const ThemeContext = React.createContext(null);

const ContextCompAll = () => {
  return (
    <div>
      {/* createContext로 만든 컴포넌트로 값을 사용하는 컴포넌트를 감싼다 */}
      <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

export default ContextCompAll;

// ContextCompAll에서 사용할 컴포넌트
// 현재 컴포넌트에서만 사용할 수 있다
// -> exprot default는 사용하지 않아도 됨

// 함수형 컴포넌트 Toolbar => ContextCompAll을 부모로 삼고, 2개의 자식을 갖는 컴포넌트
const Toolbar = () => {
  return (
    <div>
      <ThemeButtonFunc />
      <ThemeButtonClass />
      <ThemePtagFunc />
    </div>
  );
}

// Toolbar 컴포넌트 안에 들어갈 컴포넌트 - useContext를 통해서 
// 함수형 컴포넌트
const ThemeButtonFunc = () => {
  // useContext를 통해서 조상의 값에 접근할 수 있다
  // createContext로 만든 컴포넌트를 가져와서 값을 사용.
  const themes = useContext(ThemeContext);
  return (
    <div>
      <button style={{
        backgroundColor : themes.background, 
        color: themes.foreground}}> useContext로 작성한 값입니다</button>
    </div>
  );
}

// 클래스형 컴포넌트
class ThemeButtonClass extends Component {
  // 클래스로 값을 가져올 때 static을 통해서 contextType으로 가져옴
  static contextType = ThemeContext;
  render() { 
    return (
      <div>
        <button style={{
          // conctextType이 아니라 context로 접근함
          backgroundColor: this.context.background,
          color : this.context.foreground}} >클래스형 컴포넌트의 버튼입니다</button>
      </div>
    );
  }
}

// Toolbar안에 들어갈 새로운 p태그 - 컴포넌트 작성
// 함수형으로 만들어서 동일한 theme.dark를 가질 수 있도록 작성
// + themes에 blue를 추가해서 배경색이 blue이고 color가 white 주제를 만들어서 확인

const ThemePtagFunc  = () => {
  const themes = useContext(ThemeContext);
  return (
    <div>
      <p style={{
        backgroundColor : themes.background,
        color : themes.foreground
      }}>다크모드로 진행하고 있습니다</p>
    </div>
  );
}