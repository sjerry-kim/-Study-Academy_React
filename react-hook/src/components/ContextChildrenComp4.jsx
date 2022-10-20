// 실습1. 즉석 실습
import { useContext } from "react";
import { NumContext } from "./ContextComp2";

const ContextChildrenComp4 = () => {
  const {num, setNum} = useContext(NumContext);
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={()=>{setNum(num*2)}}>click! x2</button>
    </div>
  );
}
export default ContextChildrenComp4;