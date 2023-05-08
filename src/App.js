import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Login from './pages/Login';
import List from './pages/List';
import Settings from './pages/Settings';
import Layout from './components/global/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="home" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="students" >
            <Route index element={<List type="students"/>}/>
            <Route path='new' element={<New type="students"/>}/>
          </Route>
        <Route path="parents" element={ <List type="parents"/> } />
        <Route path="teachers" >
            <Route index element={<List type="teachers"/>}/>
            <Route path='new' element={<New type="teachers"/>}/>
          </Route>
        <Route path="subjects" element={ <List type="subjects"/> } />
        <Route path="settings" element={ <Settings type="settings"/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
