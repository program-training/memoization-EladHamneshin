import { useCallback, useState } from "react";

type ListComponentProps ={
  list: { id: number, value: string }[]
}

function ListComponent({ list }: ListComponentProps) {
  const [_, setLikeCount] = useState(0);

  // TODO: Optimize this function so it doesn't get recreated on every render.
  const handleLike = useCallback( (id: number) => {
    console.log(`Liked item ${id}`);
    setLikeCount((prev) => prev + 1);
  },[list]);

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.value}
          <button onClick={() => handleLike(item.id)}>Like</button>
        </li>
      ))}
    </ul>
  );
}

export default ListComponent;
