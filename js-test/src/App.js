import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react';

function App() {

  const progressbar = useRef(null);
  
  // ⬇ 🧡 아래와 같이 window객체에 접근해서 사용하는 경우가 다반사
  // ⬇ 🧡 DOM은 삭제하고 useEffect로 mount 되었을 때 실행되도록 해서 사용
  useEffect(()=>{
    window.addEventListener("scroll",function(){ 
        // 프로그래스 바가 있다면 실행할 수 있도록
        if(document.querySelector(".progressbar") != null){ // 비어있는 게 아니라면
            // 프로그래스바 세팅함수 실행
            setProgress();
        }
    })
  },[])

  // ⬇ 🧡 function 넣어줌
  //progress의 width를 스크롤 길이에 따라서 수정
  function setProgress(){
  //스크롤한 높이
  let curreY = document.documentElement.scrollTop;
  // 전체 높이
  let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;

    // 퍼센트로 바꿔서 progress css의 width값 넣어주기
    let percentage = (curreY/totalY)*100;
    document.querySelector(".progress").style.width = percentage+"%";
    }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* ⬇ 🧡 프로그래스바 html을 가져옴 */}
      {/* ⬇ 🧡 프로그래스 바 div -> 가장 위에 올라와야하기 때문에 가장 아래에 작성 */}
        <div id="progressbar" className="progressbar" ref={progressbar}>
            <div class="progress"></div>
        </div>
    </div>
  );
}

export default App;
