import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/404";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Home from "./pages/Home";

const RoutesConfig = ()=>{
  return (
  <BrowserRouter>
    
    <Routes>
      
      <Route path="/home" element={<Home/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
      <Route path="/details/:nome" element={<Details/>}> </Route>
      <Route path="*" element={<PageNotFound/>}> </Route>
      

    </Routes>
    
  </BrowserRouter>
  );
};

export default RoutesConfig;