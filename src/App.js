// import List from './Components/List';
// import New from './Components/New';
// import Single from './Components/Single';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';

import NavBar from './Components/NavBar'
import Profile from './Components/Profile/Profile'
// import Userlist from './Components/Userlist'
// import Register from './Components/Register'
// import Edit from './Components/Edit'
// import Detail from './Components/Detail'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './Components/Notification';
import MainSidebar from './Components/MainSidebar';
import Documentation from './Components/Documentation'
import Team from './Components/Team';
import Regitration from './Components/registration/Registration';
import ToDoList from './Components/ToDo/ToDoList';
function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <MainSidebar />
      </div>
      <div className="allpages">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          
      
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/notification' element={<Notification />} />
          <Route exact path='/documentation' element={<Documentation />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/registration' element={<Regitration />} />
          <Route exact path='/todolist' element={<ToDoList />} />
         

          {/* <Route exact path='/register' element={<Register />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<Detail />} /> */}

          {/* <Route path='users'>
                      <Route index element={<List/>}/>
                      <Route path=':userId' element={<Single/>}/>
                      <Route path='new' element={<New/>}/>
                    </Route> */}

          {/* <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route> */}
        </Routes>
      </div>

    </div>
  );
}

export default App;
