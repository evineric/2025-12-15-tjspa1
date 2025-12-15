import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        onButtonClick={(param) => {
          console.log("j'ai cliqué sur ", param);
        }}
        bgColor="tomato"
      >
        benjamin
      </Button>
      <Button
        onButtonClick={(param) => {
          console.log("j'ai cliqué sur ", param);
        }}
      >
        <div className="Warning"> Cancel </div>
      </Button>
      <Button bgColor="#ccff00">
        <div>3ème </div>
        <div>Bouton</div>
      </Button>
    </div>
  );
}

export default App;
