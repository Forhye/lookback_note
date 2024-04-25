import { useEffect, useState } from "react";

import Timer from "../components/Timer";

const Effect = () => {
  //   useEffect(() => {
  //     console.log("렌더링 될때마다 실행됨");
  //   });

  //   useEffect(() => {
  //     console.log("마운팅 + [배열]에 있는 값이 변화할 때만 실행됨");
  //   }, []);
  //   //[]배열이 아예 비워져 있을때는 마운팅 될 때만. 실행됨

  const [showTime, setShowTimer] = useState(false);

  const onClick = () => {
    setShowTimer(() => setShowTimer(!showTime));
  };

  return (
    <div>
      {showTime && <Timer />}
      <button onClick={onClick}>Toggle Timer</button>
    </div>
  );
};

export default Effect;
