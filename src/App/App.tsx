import { useEffect, useState } from "react";
import Button from "../components/ui/Button/Button";

const App: React.FC<undefined> = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('counter effect',counter);
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      valeur de counter :{counter}
      <hr />
      <Button
        onButtonClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="skyblue"
        onButtonClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
