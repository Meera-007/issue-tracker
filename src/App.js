
import './App.css';
import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddIssue from './components/AddIssue';

function App() {
  return (
    <div className="App">
    

<BrowserRouter>
    <Routes>
      <Route element={<Login />} path="signin" />
      <Route element={<SignUp />} path="signup" />
      <Route element={<AddIssue />} path="addissue" />
    </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
