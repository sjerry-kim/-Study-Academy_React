import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react';

function App() {

  const progressbar = useRef(null);
  
  // โฌ ๐งก ์๋์ ๊ฐ์ด window๊ฐ์ฒด์ ์ ๊ทผํด์ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๊ฐ ๋ค๋ฐ์ฌ
  // โฌ ๐งก DOM์ ์ญ์ ํ๊ณ  useEffect๋ก mount ๋์์ ๋ ์คํ๋๋๋ก ํด์ ์ฌ์ฉ
  useEffect(()=>{
    window.addEventListener("scroll",function(){ 
        // ํ๋ก๊ทธ๋์ค ๋ฐ๊ฐ ์๋ค๋ฉด ์คํํ  ์ ์๋๋ก
        if(document.querySelector(".progressbar") != null){ // ๋น์ด์๋ ๊ฒ ์๋๋ผ๋ฉด
            // ํ๋ก๊ทธ๋์ค๋ฐ ์ธํํจ์ ์คํ
            setProgress();
        }
    })
  },[])

  // โฌ ๐งก function ๋ฃ์ด์ค
  //progress์ width๋ฅผ ์คํฌ๋กค ๊ธธ์ด์ ๋ฐ๋ผ์ ์์ 
  function setProgress(){
  //์คํฌ๋กคํ ๋์ด
  let curreY = document.documentElement.scrollTop;
  // ์ ์ฒด ๋์ด
  let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;

    // ํผ์ผํธ๋ก ๋ฐ๊ฟ์ progress css์ width๊ฐ ๋ฃ์ด์ฃผ๊ธฐ
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

      {/* โฌ ๐งก ํ๋ก๊ทธ๋์ค๋ฐ html์ ๊ฐ์ ธ์ด */}
      {/* โฌ ๐งก ํ๋ก๊ทธ๋์ค ๋ฐ div -> ๊ฐ์ฅ ์์ ์ฌ๋ผ์์ผํ๊ธฐ ๋๋ฌธ์ ๊ฐ์ฅ ์๋์ ์์ฑ */}
        <div id="progressbar" className="progressbar" ref={progressbar}>
            <div class="progress"></div>
        </div>
    </div>
  );
}

export default App;
