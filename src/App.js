import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
