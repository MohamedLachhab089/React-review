import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Button Clicked 💯..
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Click Me</Button>
    </>
  );
}

export default App;
