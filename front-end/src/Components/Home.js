import React from "react";
import "./Home.css"
import { apiURL } from "../util/apiURL";
const API = apiURL();






function Home() {
 

 

    return (
    <div>
      <div className="jumbo-div">

      <div className="cover-div">
<div className="title-div">
  Every Child 
  <br>
  </br>Deserves to 
  <br></br><span id="spin"></span>
</div>
{/* <p>Lorem !</p> */}
</div>

      </div>

    </div>
    );
  }

export default Home;


// https://www.freecodecamp.org/news/how-to-create-pdf-reports-in-react/