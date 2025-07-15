import { useState } from "react";

function Change () {
    const [change, setChange] = useState(true);
    return (
        <div>
        {change ? <h1>멋사 안녕</h1> : <h1>누구세요</h1>}
        <button onClick={()=> setChange(!change)}>상태 변경</button>
        {/* 삼항 연산자 이용해서, 조건에 따라 상태값 변경 */}
        </div>
    );

}

export default Change;