import axios from "axios";
import { useState, useEffect } from "react";
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
       

      {days}
  </div>
);
}

export default App;
