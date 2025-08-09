import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={() => console.log("Clicked")}>
        Click Me
      </Button>
    </>
  );
}

export default App;
