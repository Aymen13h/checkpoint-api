import Header from "./components/Header";
import Translate from "./components/Translate";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Traduction/' element={<Translate/>} /> 
        </Routes>
      </Router>
      
    </div>

  );
};

export default App;
