import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';

function App() {
  return (
    <div className="App max-w-full md:max-w-screen-md lg:max-w-[90%] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
