import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import Header from './сomponents/Header/Header';
import Music from './сomponents/Music/Music';
import Navbar from './сomponents/Navbar/Navbar';
import News from './сomponents/News/News';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import Settings from './сomponents/Settings/Settings';
import UsersContainer from './сomponents/Users/UsersContainer';

function App(props) {
return (
	<BrowserRouter>
	    <div className='app-wrapper'>
		<Navbar />
		<Header />
		<div className='app-wrapper-content'>
		<Routes>
		<Route path="/settings" element={<Settings/>}/>
		<Route path="/music" element={<Music/>}/>
		<Route path="/news" element={<News/>}/>
        <Route path="/dialogs" element={<DialogsContainer />}/>
        <Route path="/profile/*" element={<ProfileContainer />}/>
		<Route path="/users" element={<UsersContainer />}/>
        </Routes>
			</div>
		
	</div> 
	</BrowserRouter>
		 );
}

export default App;