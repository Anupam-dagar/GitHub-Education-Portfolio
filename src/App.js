import React from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="container-fluid p-0">
        <Landing/>
        <hr className="m-0"></hr>
        <Experience/>
        <hr className="m-0"></hr>
        <Education/>
        <hr className="m-0"></hr>
        <Skills/>
        <hr className="m-0"></hr>
        <Interests/>
        <hr className="m-0"></hr>
        <Awards/>
      </div>
    </div>
  );
}

export default App;
