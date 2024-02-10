

import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Quora from './components/Quora';


import Myselfpart from './components/Myselfpart';
import Answer from './components/Answer';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Quora/>}/>
        <Route path="/Profile" element={<Myselfpart/>}/>
        <Route path="/Answer" element={<Answer/>}/>
       
     </Routes>
     
     </BrowserRouter>
   

    </div>
  );
}

export default App;
