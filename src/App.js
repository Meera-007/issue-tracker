
import './App.css';
import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddIssue from './components/AddIssue';
import NavBar from './components/NavBar';
import { UserProvider } from './useContext';
import { useState } from 'react';
import Track from './components/Track';

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <UserProvider user={currentUser}>
    

<BrowserRouter>
<NavBar />
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<Login />} path="signin" />
      <Route element={<SignUp />} path="signup" />
      <Route element={<AddIssue />} path="addissue" />
      <Route element={<Track />} path="track" />
    </Routes>
</BrowserRouter>

    </UserProvider>
  );
}

export default App;
