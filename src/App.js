
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header';
import Produce from '../src/pages/produce';
import Home from './pages/home';
import About from './pages/about';
import ProduceForm from './pages/produceForm';


function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}>
    </Route>

    <Route path="/produce" element={<Produce />}>
    </Route>

    <Route path="/about" element={<About />}>
    </Route>

    <Route path="/add" element={<ProduceForm />}>
    </Route>

    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
