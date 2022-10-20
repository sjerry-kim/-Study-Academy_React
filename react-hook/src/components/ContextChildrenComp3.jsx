import { useContext } from "react";
// 사용할 콘텍스트를 가져오기
import { CountContext } from "./ContextComp2";

const ContextChildrenComp3 = () => {
  const {state, dispatch} = useContext(CountContext);
  return (
    <div>
      <h1>{state.count}</h1> {/* useReducer로 가져온 값은 앞에 state값을 붙여줘야 함 - reducer 함수..?  */}
      {/* onClick 안에 익명함수로 감싸주어야함 바로 넣으면 무한루프에 빠짐 */}
      <button onClick={() => {dispatch({type: "increment"})}}>+1</button>
    </div>
  );
}

export default ContextChildrenComp3;