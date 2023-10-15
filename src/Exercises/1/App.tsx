import { useState } from "react";
import ComplexComponent from "./ComplexComponent";

function App() {
  const [list, _] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 4 },
    { id: 3, value: 1 },
    { id: 4, value: 3 },
    { id: 5, value: 7 }
  ]);

  return (
    <div className="App">
      <ComplexComponent list={list} />
    </div>
  );
}

export default App;
