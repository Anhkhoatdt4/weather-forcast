import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "~/index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-red-500">Hello Tailwind!</h1>
        <Outlet/>
      </div>
    </>
  )
}

export default App
