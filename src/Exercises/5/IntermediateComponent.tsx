import { memo } from "react";
import ChildComponent from "./ChildComponent";

const IntermediateComponent = ({ data }:{data:string}) => {
  console.log("Rendered: IntermediateComponent");
  return <ChildComponent data={data}></ChildComponent>;
};

export default memo(IntermediateComponent);
