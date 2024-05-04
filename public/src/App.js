import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import Sing from './component/singup';
import C_error from './contex/error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import C_login from './contex/login';
import Sidebar from './component/sidebar';
import Home from './component/home';
import Navbar from './component/navbar';
import Singupp from './contex/singup';
import Home_content from './component/home_content';
import Home_post from './component/home_post';
import Suggetion_api from './component/suggetion_api';
import Profile from './component/profile';
import Eprofile from './component/edit_profile';
import Uprofile from './component/uprofile';
import Create from './component/create';
import Toast from './component/toast';
import Journey from './component/journey';
import Place from './component/place';
import Image from './component/image';


function App() {
  return (
    <>
    <div className="App">

    <Router>
      <C_login>
      <Singupp>
    
   
      {/* <Navbar/>
      <Sidebar/>  */}
      
      <Routes >
      <Route exact path='/' element={<Image/>}></Route>
      <Route exact path='/home' element={<Home_content/>}></Route>
    
      <Route exact path='/sing' element={<Login/>}></Route>
      <Route exact path='/profile' element={<Profile/>}></Route>
      <Route exact path='/Journey' element={<Journey/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/suggetion' element={<Suggetion_api/>}></Route>
      </Routes>
      </Singupp>
      </C_login>
    </Router>
    
   
  
      
    </div>
    </>
  );
}

export default App;
