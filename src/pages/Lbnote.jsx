import { useState } from "react";

const Lbnote = () => {
  const [number, setNumber] = useState(0);

  const countClick = () => {
    setNumber(number + 1);
  };

  // 여러개의 함수를 실행시켜아 할때는 넣어주는게 맞겠지만
  // 위 코드처럼 setNumber만 사용할거면
  // 따로 countClick 함수를 선언하지 않고 그냥 onClick에 setNumber를 넣어줄수는 없나?

  //2번째
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState("");

  const nameChange = (e) => {
    setInput(e.target.value);
  };

  const addName = () => {
    setNames([input, ...names]);
    //setNames((prevState)=>{return [input, ...prevState];})
  };

  return (
    <div>
      <h1>복습 노트</h1>
      <h3>카운트</h3>
      <div>현재 카운트 = {number} </div>
      <button onClick={countClick}>Count</button>
      <div> </div>

      <h3>이름 추가</h3>
      <input type="text" value={input} onChange={nameChange} />
      <button onClick={addName}>추가하기</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
    //map 을 좀 더 알아봐야겠다.
  );
};

export default Lbnote;
