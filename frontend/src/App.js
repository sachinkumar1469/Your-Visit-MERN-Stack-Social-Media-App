import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/navigation/MainNavigation';
import Sidebar from './shared/navigation/Sidebar';
import "./app.scss"


function App() {
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
              <Route exact path='/' element={<User/>}/>
              <Route exact path='/:userId/places' element={<UserPlaces/>}></Route>
              <Route exact path="/places/new" element={<NewPlace/>}></Route>
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
