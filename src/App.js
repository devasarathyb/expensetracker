import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AddExpense from "./components/addexpense/AddExpense";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <Router>
    <div>

      <Header/>
      
     
      <Routes>  
         
       <Route exact path = "/"  element={<Home/>}/> 
       <Route exact path = "/addexpense"  element={<AddExpense/>}/>
      </Routes>
      
    <div><Footer/></div>
    </div>
    </Router> 
  );
}

export default App;
