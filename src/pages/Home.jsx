import { useState } from "react";

const Home = ({ onUpdate }) => {

    const [testData, setTestData] = useState({
        tag: "",
        age: "",
        date: ""
    });

    const sendData = (e) => {
        const { name, value } = e.target
        //const [ name, value] = [e.target.name, e.target.value] 의 간소화

        setTestData({
            ...testData,
            [name]: value
        })
    }

    return (
        <div>
            <div>이름</div>
            <input type="text" name="tag" onChange={sendData}></input>

            <div>나이</div>
            <input type="text" name="age" onChange={sendData}></input>

            <div>생일</div>
            <input type="date" name="date" onChange={sendData}></input>

            <div>
                <button onClick={() => onUpdate(testData)}>전송하기</button>
            </div>
        </div>
    )
}

export default Home;