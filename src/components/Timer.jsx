import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 인터벌 중");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 인터벌 종료");
    };
  }, []);
  // 리턴을 넣어주면 인터벌이 종료된다.
  //setInterval, clearInterval은 js에 내장되어있는 (미리 만들어져있는) 함수

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("타이머 인터벌 중");
  //     }, 1000);
  //   }, []);
  //지금 계속계속 돌아가고 있는 중

  return (
    <div>
      <div>타이머를 시작합니다.</div>
    </div>
  );
};

export default Timer;
