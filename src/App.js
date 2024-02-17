import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} key='general' category='general' country='in' pageSize={5} />} />
          <Route path='/business' element={<News setProgress={setProgress} key='business' category='business' country='in' pageSize={5} />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' category='entertainment' country='in' pageSize={5} />} />
          <Route path='/health' element={<News setProgress={setProgress} key='health' category='health' country='in' pageSize={5} />} />
          <Route path='/science' element={<News setProgress={setProgress} key='science' category='science' country='in' pageSize={5} />} />
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' category='sports' country='in' pageSize={5} />} />
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' category='technology' country='in' pageSize={5} />} />
        </Routes >
      </Router>
    </div>
  )
}


export default App;