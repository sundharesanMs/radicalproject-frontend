import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreateBook from "./CreateBook";
import Read from "./Read";
import UpdateBook from './UpdateBook'; 

import "bootstrap/dist/css/bootstrap.min.css";
import  './Home.css'; 
function App() {
  return (
    <div className="con-image">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="/edit/:id" element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
