import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Login from './pages/Login';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="home" >
          <Route index element={<Dashboard/>}/>
          <Route path="students" >
            <Route index element={<List/>}/>
            <Route path='new' element={<New/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
