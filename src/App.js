import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/pages/Home';
import Contact from './Component/pages/Contact';
import About from './Component/pages/About';
import Navbar from './Component/Layout/Navbar';
import PageNotfond from './Component/pages/PageNotfond';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddUser from './Component/users/AddUser';
import EditUser from './Component/users/EditUser';
import User from './Component/users/User'

function App() {
  return ( 
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<PageNotfond/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/adduser' element={<AddUser/>}></Route>
          <Route exact path='/users/edit/:id' element={<EditUser/>}></Route>
          <Route exact path='/view/:id' element={<User/>}></Route>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App;
