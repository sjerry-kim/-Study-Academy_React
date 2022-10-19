const ReducerCountComp = (props) => {
  // useReducer의 state의 dispatch를 들고와서
  // 자식 컴포넌트에서도 부모의 state 값을 변경할 수 있음
  const {state, dispatch} = props; // 비구조화 할당
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:'increment'})}}>+1</button>
    </div>
  );
}

export default ReducerCountComp;