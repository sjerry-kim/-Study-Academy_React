// context의 value값을 공용으로 쓰기 위해서
// 파일을 따로 작성하여 모듈로 사용할 수 있음 ...글쿤
// 현재 파일이름과 export의 이름을 다르게 사용한 이유
// : 하나에 여러개의 컴포넌ㅌ느를 내보내고 있기에 이름을 사용에 맞게 다르게 작성

import React from "react";
// 필요한 context들을 하나의 js 파일에 모아서 사용
// export를 통해 내보낼 수 있음

// count와 관련된 Context
export const CountContext = React.createContext(null);

// 실습1. 즉석실습
// Num과 관련된 Context
export const NumContext = React.createContext(null);
