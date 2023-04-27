import './App.css';
import Login from './pages/login';
import SignUp from './pages/Sign-up';
import Home from './pages/Home';
import Class from './pages/Class';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import RecoverPW from './pages/RecoverPW';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path = '/forgot' element = {<ForgotPassword/>}></Route>
          <Route path = '/recover' element = {<RecoverPW/>}></Route>
          <Route path = '/error' element = {<PageNotFound/>}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/class' element={<Class />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
