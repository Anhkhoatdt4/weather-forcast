import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "~/index.css";
import NavBar from './components/Navigation/Navigation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar onSearch={() => {}}/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
