import { useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("hard cal");
  for (let i = 0; i < 9999; i++) {} // 생각하는 시간
  return number + 10000;
};

// 랜더링이 될때마다 9999999999번 순회해서 결과값을 리턴하므로 굉장히 묵직한 함수
// 실제 인풋의 값이 변경되었을때마다 스테이트로 리랜더링이 되기까지
// 로딩이 오래걸림
// 그래서 이런걸 useMemo에 넣고 필요할때만 꺼내서 쓸 수 있도록 함

const easyClaculate = (number) => {
  console.log("easy cal");
  return number + 1;
};

const Memo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  // useMemo는 하나의 콜백함수와 배열을 받는데
  // 조건문인 배열의 값이 일치해야 콜백함수 안의 리턴값을 리턴함
  // (hardnumber의 값이 바뀔때만 return의 값을 내뱉음)

  const easySum = easyClaculate(easyNumber);

  // 원시타입 : strin, number, Boolean, Null, Undefined, Biglnt, Symbol
  //           으로 변수에 넣으면 값이 바로 들어감
  // 객체타입 : 원시 타입 외 모든 타입으로 object, array 등
  //           변수에 넣으면 따로 메모리를 할당해서 그 안에 저장해놓음
  //           변수에는 그 메모리의 주소가 담겨지게 된다.
  // 만약 useEffect에 사용할때

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 1000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+ 1 = {easySum} </span>
    </div>
  );
};

export default Memo;
