import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Recipe from './Recipe'
import {Route, Routes,useLocation} from "react-router-dom"
import Searched from './Searched'
import { FaDivide } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'


function Pages() {
  const location = useLocation();
  return (
   
  <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.path}>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}/>
      <Route path="/recipe/:id" element={<Recipe />}/>
    </Routes>
    </AnimatePresence>
    );
    // </BrowserRouter>
  
    
  


}

export default Pages