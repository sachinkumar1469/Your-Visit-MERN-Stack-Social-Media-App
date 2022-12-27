import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import MainNavigation from './shared/navigation/MainNavigation';
import Login from './auth/Login';
import Sidebar from './shared/navigation/Sidebar';
import "./app.scss"
import Signup from './auth/Signup';

import {authContext} from './context/AuthContext'
import { useContext } from 'react';


function App() {
  
  const {isLoggedIn} = useContext(authContext);
  console.log("App render")
  let routes;
  if(isLoggedIn){
    routes = (
      <>
              <Route exact path='/' element={<User/>}/>
              <Route exact path='/:userId/places' element={<UserPlaces/>}></Route>
              <Route exact path="/places/new" element={<NewPlace/>}></Route>
              <Route path='/places/:updatePlaceId' element={<UpdatePlace/>}></Route>
      </>
    )
  } else {
    routes = (
      <>
        <Route exact path='/' element={<User/>}/>
              <Route exact path='/:userId/places' element={<UserPlaces/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/Signup' element={<Signup/>}></Route>
      </>
    )
  }
  return (
    <>
      <Router>
        <MainNavigation/>
        <main>
          <div className="sidebar">
            <Sidebar/>        
          </div>
          <div className="main-content">
            <Routes>
              {routes}
              <Route path='*' element={<Navigate to="/"/>}></Route>
            </Routes>
          </div>
          <aside>
          </aside>
        </main>
      </Router>
    </>
  );
}

export default App;
