import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        onButtonClick={() => {
          console.log("j'ai cliqué sur Benjamin");
        }}
        bgColor="tomato"
      >
        benjamin
      </Button>
      <Button
        onButtonClick={() => {
          console.log("j'ai cliqué sur Cancel");
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
