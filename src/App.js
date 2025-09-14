import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Ingredients from './components/Ingredients'

import './App.css'

const App = () => (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path="/ingredients/:id" element={<Ingredients />} />
        </Routes>
      </div>
    </Router>
)


export default App;
