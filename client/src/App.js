// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import CodeForInterview from './components/CodeForInterview';
import AllUser from './components/AllUser';
import EditUser from './components/EditUser';

// to user router iterchange BrowserRouter with that component
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// BrowserRouter used in Browser based route in react 
// Routes used wrap those components you want to route
// Route used for give path to those component path=


function App() {
  return (
    // here we changed div with BrowserRouter
    <BrowserRouter>
      <NavBar />
      {/* wrap those components in Routes -> you want to route */}
      <Routes>
      {/* path-> where to show and element-> what to show */}
      {/* in this cas path is "/" means home route and codeforinterview show there */}
      <Route path='/' element={<CodeForInterview />} />
      <Route path='/all' element={<AllUser />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
