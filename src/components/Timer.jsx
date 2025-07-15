import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0); // 경과 시간 정의
  const [isRunning, setIsRunning] = useState(false); // 타이머 동작 여부 정의

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // cleanup 함수
    return () => clearInterval(interval);
  }, [isRunning]);

  // 타이머가 10초에 도달하면 멈추기
  useEffect(() => {
    if (time >= 10) {
      setIsRunning(false);
    }
  }, [time]);

  const startTimer = () => {
    if (!isRunning) {
      setTime(0);        // 타이머 리셋
      setIsRunning(true);
    }
  };

  return (
    <div>
      <h1>타이머 만들기</h1>
      <button onClick={startTimer} disabled={isRunning}>
        타이머 시작
      </button>
      <h3>Time: {time} seconds</h3>
      <h4>남은 시간 : {10 - time}</h4>
    </div>
  );
}

export default Timer;
