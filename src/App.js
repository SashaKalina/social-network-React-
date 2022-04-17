import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "App.css";
import DialogsContainer from "сomponents/Dialogs/DialogsContainer";
import Header from "pages/Header";
import Music from "pages/Music";
import Navbar from "pages/Navbar";
import News from "pages/News";
import ProfileContainer from "сomponents/Profile/ProfileContainer";
import Settings from "pages/Settings";
import UsersContainer from "сomponents/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
