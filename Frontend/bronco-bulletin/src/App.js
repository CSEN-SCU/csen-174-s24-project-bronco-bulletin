import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
