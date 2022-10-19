// 함수형 컴포넌트

import { useReducer } from "react";
import ReducerCountComp from "./ReducerCountComp";
import MemoComp from "./MemoComp";

function reducer(state, action){
  switch(action.type){
    case 'increment' :
      return {count : state.count+1}
    case 'decrement' :
      return {count : state.count-1}
    case 'zero' :
      return {count: 0}
    // case 추가
    case 'changeInput':
      return {input : action.payload} // <- e.target.value 값이 payload에 들어가 있음
  }
}

const ReducerComp = () => {
  const[state, dispatch] = useReducer(reducer, {count : 0, input:""})

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:'increment'})}}>+1</button>
      <button onClick={()=>{dispatch({type:'decrement'})}}>-1</button>
      <button onClick={()=>{dispatch({type:'zero'})}}>0</button>

      {/* 자식 컴포넌트에 props 값으로 state와 dispatch를 전달할 수 있다 */}
      <ReducerCountComp state={state} dispatch={dispatch} />

      {/*
        자식 컴포넌트 MemoComp를 하나 생성하여, 
        state에 input="" 추가하고,
        MemoComp에 작성한 글이 ReducerComp의 아래 h1태그에서 수정되어 나올 수 있게 하세요
      */}
      <h1>{state.input}</h1>
      {/* 먼저 ReducerComp에서 실행해보기, e객체의 값을 어떻게 가져갈지 생각하기 
      <input type="text" onChange={(e) => {
        // setState(e.target.value) -> dispatch에서 쓸 수 있도록
        dispatch({type: 'changeInput', payload: e.target.value})
      } } />
      */}
      <MemoComp dispatch={dispatch}/>
    </div>
  );
}

export default ReducerComp;