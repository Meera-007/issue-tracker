
import './App.css';
import {
  BrowserRouter, 
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    

<BrowserRouter>
    <Routes>
      <Route element={<Login />} path="signin" />
      <Route element={<SignUp />} path="signup" />
    </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
