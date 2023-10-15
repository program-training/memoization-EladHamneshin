
const ChildComponent = ({ data }:{data:string}) => {
  console.log("Rendered: ChildComponent");
  return <div>{data}</div>;
};

export default ChildComponent;
