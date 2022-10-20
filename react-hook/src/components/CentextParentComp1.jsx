// 부모 컴포넌트가 되어서 context를 통해 value값을 전달
// value값에 state와 dispatch를 전달 (객체형태로)
import { useReducer } from "react";
// 실습1. 즉석 실습
// 1) NumContext를 통해서, useState를 사용하여, num값과 setNum 전달하기
// 2) ContextChildrenComp4를 만들어 출력하고 증가하는 버튼을 사용하세요.
import { CountContext } from "./ContextComp2";
import ContextChildrenComp3 from "./ContextChildrenComp3";
import { useState } from "react";
import { NumContext } from "./ContextComp2";
import ContextChildrenComp4 from "./ContextChildrenComp4";

function reducer(state, action){
  switch (action.type){
    case 'increment' : 
      return {count : state.count + 1}
    case 'decrement' : 
      return {count : state.count - 1}
  }
}

const ContextParentComp1 = () => {
  const [state, dispatch] = useReducer(reducer,{count:0})
  // 실습1. 즉석 실습
  const [num, setNum] = useState(1);
  return (
    <div>
      <CountContext.Provider value={{state: state, dispatch: dispatch}}>
        <ContextChildrenComp3 />
      </CountContext.Provider>
      {/* 실습1. 즉석 실습 */}
      <NumContext.Provider value={{num : num, setNum: setNum}}>
        <ContextChildrenComp4 />
      </NumContext.Provider>
    </div>
  );
}

export default ContextParentComp1;