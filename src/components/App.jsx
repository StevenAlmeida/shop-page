import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='nav'></div>
      <Outlet />
    </>
  );
}

export default App;
