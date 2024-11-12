import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Main from './components/Main';
import Translate from "./components/Translate";
function App() {

  return(
    <>

<Router>
      <Routes>
        <Route path="/" element={< Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/translate' element={<Translate/>}/>

      </Routes>
    </Router>
    </>
  )
 

  
}
export default App;
