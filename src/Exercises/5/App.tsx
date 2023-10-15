import { useState } from "react";
import IntermediateComponent from "./IntermediateComponent";

function App() {
  const [data, _] = useState("ata");

  // TODO: Prevent unnecessary renders in IntermediateComponent when data changes.
  return (
    <div className="App">
      <IntermediateComponent data={data}/>
    </div>
  );
}

export default App;
