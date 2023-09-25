import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Accounts from './Layout/Accounts/Accounts';
import { Functions } from './Library/Functions/Functions';
import Terms from './component/Terms/Terms';
import AboutUs from './component/AboutUs/AboutUs';
import Faq from './component/Faq/Faq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Functions>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/accounts" element={<Accounts/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/faq" element={<Faq/>} />
          </Routes>
        </Functions>
      </BrowserRouter>
    </div>
  );
}

export default App;