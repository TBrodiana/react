import React from 'react';
import Main from "./components/Main/Main";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Main/Section/Section";
import Nav from "./components/Main/Nav/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import Videos from "./components/Main/Videos/Videos";

function App() {
  return (
      <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Main>
                    <Nav/>
                    <Routes>
                        <Route path='/profile' element={<Section/>}/>
                        <Route exact path='/dialogs/*' element={<Dialogs/>}/>
                        <Route path='/videos' element={<Videos/>}/>
                    </Routes>
                </Main>
                <Footer/>
            </div>
      </BrowserRouter>
  );
}

export default App;
