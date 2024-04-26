// ref의 사용
// 1. 스테이트처럼 저장 장소로 쓰이지만
//    랜더링될때마다 값이 초기화되는 함수를 가진 스테이트와는 달리
//    랜더링이 되어도 값을 그대로 유지하고 있다.
// 2. 돔 요소에 쉽게 접근해서 포커스를 줄 수 있다.
//    ex) id input 창을 클릭하지 않아도 키보드로 입력하면 바로 값이 들어감
import { useState, useRef, useEffect } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };
  console.log("스테이트 값 증가 : ", count);
  //스테이트값이 증가하면서 모든 페이지가 리랜더링 됨

  const countRef = useRef(0);
  // countRef에 0으로 초기화 해준것은 맞지만
  // 실제 값은 conutRef.current에 들어있어 countRef.current로 호출해서 사용해야함

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("레프 값 증가 : ", countRef.current);
  };
  // 클릭할때마다 countRef.current의 값은 증가하지만
  // 실제 랜더링이 되지 않기때문에 화면의 값은 초기값을 유지하고,
  // 스테이트로 리랜더링이 되었을때 countRef에 담긴 값이 화면에 나타난다

  const countRef2 = useRef(0);
  let coutVar = 0;

  const increaseRef = () => {
    countRef2.current = countRef2.current + 1;
    console.log("Ref : ", countRef2.current);
  };

  const increaseVar = () => {
    coutVar = coutVar + 1;
    console.log("Var : ", coutVar);
  };

  const [render, setRender] = useState(0);

  const renderState = () => {
    setRender(render + 1);
  };
  // 랜더링이 될때마다 모든 함수를 처음부터 읽는데,
  // 일반 변수의 경우 랜더링이 되면 초기값으로 변해버리기 때문에
  // 스테이트로 랜더링을 하면 초기값인 0으로 돌아간다.
  // 하지만 Ref는 그 값을 언마운트 될때까지 보관하고 있으므로
  // 값을 그대로 보관한 채로 랜더링을 하면 그제서야 화면에 값이 표현됨

  const [renderCount, setRenderCount] = useState(1);
  const renderRef = useRef(0);

  const renderingCountState = () => {
    setRenderCount(renderCount + 1);
  };

  useEffect(() => {
    renderRef.current = renderRef.current + 1;
    console.log("렌더링이 된 수 : ", renderRef.current);
  });

  // useEffect는 렌더링이 될때마다 실행되는데
  // 이 안에 또다시 스테이트를 넣어주면 무한 루프에 걸리게됨
  // 이때 Ref를 사용해서 렌더링이 된 수를 저장할 수 있음

  return (
    <div>
      <h1>Ref 활용 예제</h1>

      <h3>State : {count}</h3>
      <button onClick={increaseCountState}>State 증가</button>

      <h3>Ref : {countRef.current}</h3>
      <button onClick={increaseCountRef}>Ref 증가</button>
      <p></p>
      <h2>Ref와 변수의 차이</h2>
      <h3>Ref : {countRef2.current}</h3>
      <h3>Var : {coutVar}</h3>
      <button onClick={renderState}>렌더링</button>
      <button onClick={increaseRef}>Ref 증가</button>
      <button onClick={increaseVar}>Var 증가</button>
      <p></p>

      <h2>렌더링이 몇번 되었는가?</h2>
      <h3>렌더링 카운트 : {renderCount}</h3>
      <button onClick={renderingCountState}>렌더링하기</button>
    </div>
  );
};

export default Ref;
