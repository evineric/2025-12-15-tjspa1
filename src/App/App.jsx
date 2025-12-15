import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button title="benjamin"
      onButtonClick={(param)=>{console.log("j'ai cliqué sur ",param)}}
      bgColor="tomato"/>
      <Button title="ok"
      onButtonClick={(param)=>{console.log("j'ai cliqué sur ",param)}}/>
      <Button title="cancel"
      bgColor="#ccff00"/>
    </div>
  );
}

export default App;
