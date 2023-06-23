import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar1 from "./Navbar1";
import Home from "./Home";
import Signup from "./Signup";
import Book from "./Book";
 function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar1/>
     <Routes>
      <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
    </Routes>
     </BrowserRouter>
    </div>
  );
 }

 export default App;
