
import {Route,Routes} from "react-router-dom";
import Userpage from "./components/Userpage";
import Employeepage from "./components/Employeepage";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/user" element={<Userpage/>}/>
      <Route exact path="/employee" element={<Employeepage/>}/>
      
     
     </Routes>
     
    
    </>
  );
}
export default App;
