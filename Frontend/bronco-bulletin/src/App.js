import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import './App.css';

function App() {
  const RoutesJSX = (
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
    </Route>
  );

  const routes = createRoutesFromElements(RoutesJSX);
  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
