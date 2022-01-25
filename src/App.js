import React from 'react';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Item from './pages/Item';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element = {<Item />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
