// 함수형 컴포넌트
// sfc : arrow function 컴포넌트 자동완성

import { useEffect } from "react";
import { useState } from "react";

const StateEffectHookComp = () => {
  // useState 클래스형 컴포넌트의 state처럼 사용할 수 있음
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  // effect Hook : componentDidMount()와 componentDidUpdate() 내용을 함께 가지고 있음
  // 클래스컴포넌트의 라이프사이클과 동일하게 사용할 수 있음
  // 마운트될 때, 업데이트될 때 실행됨
  useEffect(()=>{
    console.log("이펙트훅이 실행되었습니다")
    
    // return을 통해서 언마운트될 때 실행할 코드를 넣어서 실행 가능
    /*
    return (()=>{
      console.log("종료하였습니다")
    })
    */
  }); // 두 번째 인수값을 넣지 않을 때, 모든 state와 props 값에 대해 실행됨

  // useEffect는 두번째 인수를 배열로 받아올 수 있음.
  // 두 번째 인수 : 업데이트할 때 참고할 state나 props
  // 두 번째 인수 [] : 빈 배열로 넣어주게 되면 시작할 때 한 번만 실행
  useEffect(()=>{
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  },[]); // useEffect에 두 번째 인수를 줌.

  // 특정한 state값이 바뀔 때 실행하고 싶다면 useEffect를 사용
  useEffect(()=>{
    console.log("카운트가 증가하였습니다");
  },[count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1);}}>+1</button>
      <h2>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h2>
    </div>
  );
}

export default StateEffectHookComp;