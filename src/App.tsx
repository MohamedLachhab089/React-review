import ListGroup from "./components/ListGroup";

function App() {
  let items = ["London", "New York", "Tokyo", "Paris", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </>
  );
}

export default App;
