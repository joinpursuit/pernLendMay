import axios from "axios";
import { useState, useEffect } from "react";
import ImpartialHearing from "./Components/ImpartialHearing"
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
  <div className="App">
    <Switch>
          <Route exact path="/" component={Login} />
          <>
            <NavBar />
            <Switch>
              <Route exact path="/cars">
                <CarsIndex />
              </Route>
              <Route exact path="/cars/car/new">
                <CarNew />
              </Route>
              <Route exact path="/cars/:id">
                <CarShow />
              </Route>
              <Route path="/cars/:id/edit">
                <CarEdit />
              </Route>
              
            
            
            
              <Route path="/*">
                <FourOFour />
              </Route>
            </Switch>
          </>
        </Switch>
       {/* <ImpartialHearing/>

      {days} */}
  </div>
);
}

export default App;
