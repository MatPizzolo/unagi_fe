import React, { useEffect, useCallback } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

//pages
import Home from './pages/Home';
import AddEvent from "./pages/Addevent"
import RestoPage from './pages/RestoPage';

import { useAppDispatch } from './store/store';
import { getRestos } from './features/restosSlice'


function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getRestos());
  }, [dispatch])

  useEffect(() => {
    initApp();
  }, [])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/:id" element={<RestoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
