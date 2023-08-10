
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planets from './views/Planets';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <HeaderForm />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
