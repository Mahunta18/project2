import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Menu from "./component/Menu";
import Music from "./component/Music";
import About from "./component/About";
import Pnf from "./component/Pnf";
import Track from "./component/Screen/Track";

export default function App(props) {
  return(
    <BrowserRouter>
              <Menu/>

              <Routes>
                    <Route path={`/`} element={<Music/>} />
                    <Route path={`/music`} element={<Music/>} />
                    <Route path={`/about`} element={<About/>} />
                    <Route path={`/track/:id`} element={<Track/>} />
                    <Route path={`/*`} element={<Pnf/>} />
              </Routes>
    </BrowserRouter>
  )
}