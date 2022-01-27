import React from "react";
import "./Services.css"
import { apiURL } from "../util/apiURL";
const API = apiURL();






function Services() {
 

 

    return (
      <div className="home-section">
<h1>Parent Support and Training Calendar</h1>
        <div className="month-div">      
        <div className="month">      
  <ul>
    <li className="prev">&#10094;</li>
    <li className="next">&#10095;</li>
    <li>
      February<br></br>
      <span style={{ fontSize: "18px" }}>2022 </span>
    </li>
  </ul>
</div>

<ul className="weekdays">
<li>Su</li>
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
 
</ul>

<ul className="days"> 
<li><h4 className="number">33</h4></li>
  <li> <h4 className="number">31</h4></li> 
  <li> <h4 className="number">1</h4></li>
  <li> <h4 className="number">2</h4></li>
  <li> <h4 className="number">3</h4></li>
  
  <li> <h4 className="number"> 4</h4> 
  {/* <p>training</p> */}
  {/* <h5  className="training"> training</h5>  */}
  {/* <h4 className="number">training</h4> */}
  {/* <a
              href="https://www.eventbrite.com/e/training-series-tickets-247399738277"
              target="blank"
            >
           training
            </a> */}
 
  </li>

    {/* <a
              href="https://www.uber.com/us/en/drive/tax-information/"
              target="blank"
            >
              Uber
            </a> */}
  {/* https://www.eventbrite.com/e/training-series-tickets-247399738277 */}
  <li> <h4 className="number">5</h4></li>
  <li> <h4 className="number">6</h4></li>
  <li> <h4 className="number">7</h4> </li>
  <li> <h4 className="number">8</h4> </li>
  <li> <h4 className="number">9</h4> </li>
  <li> <h4 className="number">9</h4>  </li>
  <li><h4 className="number">11</h4></li>
  {/* <a
              href="https://www.uber.com/us/en/drive/tax-information/"
              target="blank"
            >
              Uber
            </a> */}
<li><h4 className="number">12</h4></li>
  <li><h4 className="number">13</h4></li>
  <li><h4 className="number">14</h4></li>
  <li><h4 className="number">16</h4> </li>
  <li><h4 className="number">16</h4> </li>
  <li><h4 className="number">16</h4> </li>
 
  <li><h4 className="number">16</h4> </li>
  
  <li><h4 className="number">16</h4> </li>
  <li><h4 className="number">16</h4> </li>
  <li><h4 className="number">16</h4> </li>
  <li><h4 className="number">16</h4> </li>
  <li className="twenties"><h4 className="number">16</h4></li>
  <li className="twenties"><h4 className="number">16</h4></li>
  <li className="twenties"><h4 className="number">16</h4></li>
  <li className="twenties"><h4 className="number">16</h4></li>
  <li className="twenties"><h4 className="number">16</h4></li>
  <li className="twenties"><h4 className="number">16</h4></li>
  <li className="twenties"><h4 className="number">16</h4></li>
  
</ul>
      {/* <section>
      <table className="home-table">
        <thead>
          <tr className="head-row">
            <th className="head-date">Date</th>
            <th className="head-type">Day</th>
            <th className="head-amount">time</th>
            <th className="head-edit">Show</th>
          </tr>
        </thead>
        <tbody>
        <tr className="row-penses">
      <td>one</td>
      <td>two</td>
      <td>three</td>
      <td>
    four
      </td>
    </tr>
        </tbody>
      </table>
      </section> */}
      </div>
      </div>
    );
  }

export default Services;


// https://www.freecodecamp.org/news/how-to-create-pdf-reports-in-react/