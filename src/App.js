
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Produce from './produce';


function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header />}>
    </Route>

    <Route path="/produce" element={<Produce />}>
    </Route>
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
