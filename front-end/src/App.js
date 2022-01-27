import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserContext,UserProvider } from "./Providers/UserProvider";
import NavBar from "./Components/NavBar";
// import About from "./Components/About";
import Home from "./Components/Home";
import Resources from "./Components/Resources";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import "./App.css";
import "firebase/auth";

// import Footer from "./Components/Footer";

import { apiURL } from "./util/apiURL.js";
const API = apiURL();

function App() {
  const [days, setDays] = useState();

  const fetchQuotes = async () => {
    let res;
    try {
      res = await axios.get(`${API}/test`);
  
 console.log(res.data)
let mapData = res.data.map((el)=>{
   return el.name
 })
 console.log(mapData)
 setDays(mapData);
    } catch(err) {
      console.log(err);
    }
  }  
useEffect(() => {
  fetchQuotes();
}, []);

return (
  // <div className="App">
  //   {days}
  //  <ImpartialHearing/>
  // </div>
    //   <div className="App">
    //   <Router>
    //     <NavBar />
       
    //       <Routes>
       
            

            
    //         <Route exact path="/" element={<Home/>}/>
         
    //         <Route exact path="/services" element={<Services/>}/>
    //         <Route exact path="/services" element={<Services/>}/>
    //         <Route exact path="/resources" element={<Resources/>}/>
            
       
    //         <Route exact path="/" component={Home} />
    //         <Route path="/:id" component={Home} />
      
          
    //            </Routes>

      
    //   </Router>
    // </div>
    <div className="App">
    <UserContext.Provider>
      <Switch>
        <Route exact path="/" component={Login} />
        <>
          <NavBar />
          <Switch>
            <Route exact path="/services">
              <Services/>
            </Route>


            <Route exact path="/">
              <Home/>
            </Route>


            <Route exact path="/resources">
              <Resources/>
            </Route>
        

          


 
         
     





   
          
          </Switch>
        </>
      </Switch>
    </UserContext.Provider>
  </div>


);
}

export default App;



// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import LocationDetails from "./Components/LocationDetails";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <main>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/location/:id" component={LocationDetails} />
//           </Switch>
//         </main>
      
//       </Router>
//     </div>
//   );
// }

// export default App;
