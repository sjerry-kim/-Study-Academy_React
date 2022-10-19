import { useMemo, useState } from "react";

const UseMemoComp = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  // useMemo : 함수의 return된 값을 계속 사용한다
  // []  두 번째 인자 : 두 번째 들어온 인자값이 바뀌었을 때, 함수를 실행한다
  // state, props 값임

  // return값이 있는 함수 : return의 {}에서 내용을 출력할 수 있다
  // 함수는 update 할 때마다 랜더하여 사용한다
  const doubleCount = ()=> {
    console.log("doubleCount")
    return count*2
  };

  // useMemo를 통해서, 작성한 함수가 특정 값에만 실행되어 return된다
  // 그 값이 아닐 경우 함수는 실행되지 않는다
  // 즉 리턴값을 변수에 담는겨
  const memoCount = useMemo(()=>doubleCount(),[count])
  const memoNum = useMemo(()=>{
    console.log("memoNum")
    return num*3
  },[num])

  return ( 
    <div>
      {/* {} 통해서 함수의 결과값을 출력할 수 있다 */}
      {/* useMemo를 통해서 사용해줄 때, ()없이 적어준다 */}
      <h1>{memoCount} / {memoNum}</h1> 
      {/* useMemo를 통해서 memoNum을 만드세요 : num값을 3배로 출력하는 함수 */}
      <h2>{count} / {num}</h2>
      <button onClick={()=>{setCount(count+1)}}> count+1</button>
      <button onClick={()=>{setNum(num+1)}}> num+1</button>
    </div>
  );
}

export default UseMemoComp;