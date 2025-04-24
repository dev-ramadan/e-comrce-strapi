import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./componants/pages/Home/Home";
import About from "./componants/pages/About/About";
import Products from "./componants/pages/Products/Products";
import Login from "./componants/Login/Login";
import {Box} from '@chakra-ui/react';
import LayOut from "@/componants/LayOut/LayOut"
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Box><LayOut/></Box>}>
    <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Products/>} />
    </Route>
      <Route path="login" element={<Login/>}/>
    </>
  )
);

export default router;
