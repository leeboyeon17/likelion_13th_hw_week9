import "./App.css";
import Counter from "./components/Counter";
import Change from "./components/Change";
import UseEffectCounter from "./components/UseEffectcounter";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Counter />
      <Change />
      <UseEffectCounter />
      <h1>박스 만들기</h1>
      <Box label="빨강박스" color="red" />
      <Box label="파랑박스" color="blue" />
      <h1>버튼 만들기</h1>
      <Button 
        label="1번 버튼"
        color="pink"
        buttonhandler={ () => console.log("리액트 어렵죠..?ㅠㅠ")}
      />
      <Button
        label="2번 버튼"
        color="green"
        buttonhandler={ () => console.log("세션 끝내기!")}
      />
      <Timer />
    </>
  );
}

export default App;
