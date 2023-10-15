import { ReactElement, useMemo, useState } from 'react';
import ExpensiveContext from './ExpansiveContext';

function ExpensiveProvider({ children }: {children:ReactElement}) {
  // TODO: Optimize this section so that the expensive computation is not run on every render.
  const [a, _] = useState("8")

  const value = useMemo(()=>{
    console.log("expensive computation");
    const val = (888*921839812988732/1231286).toString()+a
    return {a:val}},[a]);

  return (
    <ExpensiveContext.Provider value={value}>
      {children}
    </ExpensiveContext.Provider>
  );
}

export default ExpensiveProvider;
