//import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
