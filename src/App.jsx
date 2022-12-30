import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Page1, Page2, Home } from './components';
function App() {
  return (
    <main className='w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </main>
  );
}

export default App;
