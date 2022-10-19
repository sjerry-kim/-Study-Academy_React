// 함수형 컴포넌트
import { useState } from "react";

const EventChangeFuncComp = ()=>{
    const [message, setMessage] = useState({
        message : "안녕",
        name : "성춘향",
    });

    // 실습1. onChange 함수로 바꿔서 사용하기
    // 이대로 사용하면 문자열이 통채로 들어감 -> 수정 필요
    const onChange = (e)=>{
        const newMessage = {
            // ... 스프레드 연산자 : 객체나 배열의 값을꺼내서 출력
            ...message, // message : "안녕", name : "성춘향"
            [e.target.name]: e.target.value
        }
        setMessage(newMessage)
    };

    return(
        <div>
            {/* h1태그에 input으로 작성한 내용 출력하기*/}
            <h1>글을 입력하세요</h1>
            <input type="text" onChange={
                (e) => {
                    console.log(e.target.value);
                    setMessage(e.target.value);
                }
            } />
            <p>{message.message}</p>

            {/* 실습1. onChange 함수로 바꿔서 사용하기*/}
            <h1>write somethin'</h1>
            <input type="text" name="message" onChange={onChange} />
            <p>{message.message}</p>
            <input type="text" name="name" onChange={onChange} />
            <p>{message.name}</p>
        </div>
    )
};

export default EventChangeFuncComp;