import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home.component';
import './App.css';
import Monthly from './components/Monthly/monthly.component';
import Daily from './components/Daily/daily.component';
import CSVUpload from './components/CSV/csv.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='daily' element={<Daily/>}></Route>
        <Route path='monthly' element={<Monthly/>}></Route>
        <Route path='upload' element={<CSVUpload/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
