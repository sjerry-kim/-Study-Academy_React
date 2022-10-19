// 2022.10.13.(목)
// 함수형 컴포넌트
import { useState } from "react";

const EventFuncComp = ()=>{
    const [num, setNum] = useState(0);
    const [name, setName] = useState("홍길동");

    // 익명함수 또는 화살표 함수로 작성해서 사용
    const numPlus = () => {setNum(num+3);}
    const changeName = () => {setName("성춘향")}

    return (
        <div>
            {/* 같은 함수 안에 있는 내용이므로 이름만 작성 */}
            <button onClick={numPlus}>{num}</button>
            {/* name = "홍길동"을 작성한 후 버튼을 클릭하면 다른 이름을 바뀌는 함수 작성*/}
            <h2>{name}</h2>
            <button onClick={changeName}>click</button>
        </div>
    );
}

export default EventFuncComp;