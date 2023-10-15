import { memo } from "react";

type ChildComponentProps = {
  obj:{value:string}
}

function arePropsEqual(oldProps: ChildComponentProps, newProps: ChildComponentProps){
  return oldProps.obj.value === newProps.obj.value;
}

const ChildComponent = ({ obj }: ChildComponentProps) => {
  console.log('Rendered: ChildComponent');
  return <div>{obj.value}</div>;
};

export default memo(ChildComponent, arePropsEqual);
