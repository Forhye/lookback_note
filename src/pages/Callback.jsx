// useMemo 는 값을 저장해서 필요할때마다만 꺼내서 쓰고
// useCallback은 함수 자체를 저장해서 필요할때 꺼내서 사용
// [의존성 배열] 안에 있는 값이 변할때 작동됨

const Callback = () => {
  return (
    <div>
      <h3></h3>
    </div>
  );
};

export default Callback;
