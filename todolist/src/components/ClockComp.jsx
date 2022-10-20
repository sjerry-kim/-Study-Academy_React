// 함수형 컴포넌트 - 시간출력

import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
  const [time, setTime] = useState(new Date());
  
  //1초마다 반복하기 위한 setInterval 사용 - 생성될 때 한 번만 실행
  useEffect(()=>{setInterval(() => {
    setTime(new Date())
  }, 1000);},[])
  
  // useMemo 지정한 state 값이 바뀌지 않는다면, 이전의 return 값을 그대로 쓸 수 있음
  // -> new Date()로 값이 바뀌지 않기 때문에...
  // padstart를 사용하기 위해 String으로 형변환 하여 변수에 할당한 후 사용
  const hours = useMemo(()=>{
    let stringHour = String(time.getHours());
    return stringHour.padStart(2,"0");
  },[time])
  const minutes = useMemo(()=>{
    let stringMinutes = String(time.getMinutes());
    return stringMinutes.padStart(2,"0");
  },[time])
  const seconds = useMemo(()=>{
    let stringSeconds = String(time.getSeconds());
    return stringSeconds.padStart(2,"0");
  },[time])

  return(
    <div>
      <h1>{hours}:{minutes}:{seconds}</h1>
    </div>
  );
}

export default ClockComp;