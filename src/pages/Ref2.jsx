// Ref 두번째 공부
// dom 요소에 접근해서 사용하는 방법
// ★★★자동으로 포커스 되게 해줄 수 있다
// 바닐라 자바스크립트? 에 Document.querySelector() 같다

import { useEffect, useRef } from "react";

const Ref2 = () => {
  const inputRef = useRef();

  useEffect(() => {
    //console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.focus();
  };

  // 버튼 클릭을 하면 알림창으로 팝업이 뜬 후에
  // 다시 인풋창으로 포커스를 맞춘다

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default Ref2;
