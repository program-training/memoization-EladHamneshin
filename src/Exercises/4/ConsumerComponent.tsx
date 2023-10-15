import { useContext } from "react";
import ExpensiveContext from "./ExpansiveContext";

function ConsumerComponent() {
  const value = useContext(ExpensiveContext);
  // render using the context value
  
  return <div>{value.a}</div>;
}

export default ConsumerComponent;
