import { useMemo } from 'react';

function ComplexComponent({ list }: {list:{id: number, value:number}[]}) {
  console.log('Rendered: ComplexComponent');

  const sortedList = useMemo(()=> list.sort((a, b) => a.value - b.value), [list]);

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}

export default ComplexComponent;
