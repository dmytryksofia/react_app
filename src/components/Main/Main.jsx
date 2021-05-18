import React from "react";
import LineChart from './LineChart';
import img1 from "../../images/today-income@1X.jpeg";
import img2 from "../../images/today-income_year@1X.jpeg";
import img3 from "../../images/calendar@1X.jpeg";
import img4 from "../../images/Circle.svg";


import "./Main.scss";
import "./jscalendar.css";

export const Main = () => (
  <main className="main">
    <section className="credit-card">
      <h2 className="credit-card__title">My Credit Card</h2>
      <div className="credit-card__card">
        <p className="credit-card__number">
          2450   24512   25412
        </p>
        <span className="credit-card__validity-period">12/05</span>
        <span className="credit-card__text">Subash</span>
      </div>
      <table className="credit-card_about table">
        <tbody>
          <tr>
            <td className="table__cell-name">Card number :</td>
            <td className="table__cell-value">2450 24512 25412</td>
          </tr>
          <tr>
            <td className="table__cell-name">Account Name:</td>
            <td className="table__cell-value">Subash Chandra</td>
          </tr>
          <tr>
            <td className="table__cell-name">Card status:</td>
            <td className="table__cell-value">Active</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section className="statistics">
      <div className="statistics__header">
        <h2 className="statistics__title">Statistics</h2>
        <p className="statistics__container">
          <span className="statistics__year">2018</span>
          <span className="statistics__month">Month</span>
        </p>
      </div>
      <div style={{ height: "284px", width: "548px" }}>
      <div> <LineChart
       
       /></div>
        
      <canvas id="myChart" ></canvas>
  
      </div>
    </section>
    <section className="earning">
      <h2 className="earning__title">Earning in Month</h2>
      <div
        className="earning__chart"
        style={{ height: "136px", width: "136px" }}
      >
        <img className="ChartDoughnut" src={img4} alt="ChartDoughnut" />
        <canvas
          id="ChartDoughnut"
          style={{ height: "136px", width: "136px" }}
          height="136px"
          width="136px"
        ></canvas>
        <span className="earning__value">75 %</span>
      </div>
      <table className="earning_about table">
        <tbody>
          <tr>
            <td className="table__cell-name">Deposit :</td>
            <td className="table__cell-value">$20 54 1 875 574</td>
          </tr>
          <tr>
            <td className="table__cell-name">Expese :</td>
            <td className="table__cell-value">$54 1 875 574</td>
          </tr>
          <tr>
            <td className="table__cell-name">payable :</td>
            <td className="table__cell-value">$805 875 574</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section className="montly-sale">
      <h2 className="montly-sale__title">Montly Sale</h2>
      <div className="montly-sale__wrapper">
        <div className="montly-sale__container">
          <span className="montly-sale__value">20 54 1</span>
          <span className="montly-sale__name">Today Income</span>
        
        </div>
        <img
        className="montly-sale__icon"
        src={img1}
        height="53px"
        width="74px"
        alt="today income"
      />
      </div>
     
      <div id="line-container1" className="montly-sale__bar">
        <div
          id="pbt1"
          style={{
            position: "relative",
            top: "4px",
            left: "95%",
            color: "#ffb767",
          }}
          className="Progress"
        >
          65 %
        </div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100.08 3"
          width="210"
          height="10"
        >
          <path d="M 0 2.5 L 100 2.5" fillOpacity="0" stroke="#eee" />
          <path
            transform="translate(97.5,0)"
            id="circle1"
            d="M 0 2.9 L 1 0 L 2 2.1"
            style={{
              fill: "#ffb767",
              stroke: "#ffb767",
              width: "3px",
              left: "65%",
              strokeLinecap: "butt",
            }}
          />
          
          <path
            id="heart1"
            fillOpacity="0"
            d="M 0 2.5 L 100 2.5"
            fill="none"
            stroke="#ffb767"
          />
        </svg>
      </div>
    </section>
    <section className="yealy-sale">
      <h2 className="yealy-sale__title">Yealy Sale</h2>
      <div className="yealy-sale__wrapper">
        <div className="yealy-sale__container">
          <span className="yealy-sale__value">20 54 125 </span>
          <span className="yealy-sale__name">Today Income</span>
        </div>
        <img className="yealy-sale__icon" src={img2} alt="today income" />
      </div>

      <div id="line-container2" className="yealy-sale__bar">
        <div
          id="pbt2"
          style={{
            position: "relative",
            top: "4px",
            left: "95%",
            color: "#18bb4b",
          }}
          className="Progress"
        >
          75 %
        </div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100.08 3"
          width="220"
          height="10"
        >
          <path className="M 0 2.5 L 100 2.5" fillOpacity="0" stroke="#eee" />
          <path
            transform="translate(97.5,0)"
            id="circle2"
            d="M 0 2.9 L 1 0 L 2 2.1"
            style={{
              fill: "#18bb4b",
              stroke: "#18bb4b",
              width: "3px",
              left: "65%",
              strokeLinecap: "butt",
            }}
          />
          <path
            id="heart2"
            fillOpacity="0"
            d="M 0 2.5 L 100 2.5"
            fill="none"
            stroke="#18bb4b"
          />
        </svg>
      </div>
    </section>
    <section className="calender">
      <div className="calender__wrapper">
        <img className="calender__icon" src={img3} alt="calendar" />
        <div className="calender__container">
          <h2 className="calender__title">Calender</h2>
          <p className="calender__now_date" id="calender_now_date">
          May 14, 2021
          </p>
        </div>
       </div>
       <div id="my-calendar" class="jsCalendar material-theme jsCalendar"><table><thead><tr class="jsCalendar-title-row"><th colspan="7" class="jsCalendar-title"><div class="jsCalendar-title-left"><div class="jsCalendar-nav-left"></div></div><div class="jsCalendar-title-name">May</div><div class="jsCalendar-title-right"><div class="jsCalendar-nav-right"></div></div></th></tr><tr class="jsCalendar-week-days"><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></thead><tbody><tr><td class="jsCalendar-previous">26</td><td class="jsCalendar-previous">27</td><td class="jsCalendar-previous">28</td><td class="jsCalendar-previous">29</td><td class="jsCalendar-previous">30</td><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>10</td><td>11</td><td>12</td><td>13</td><td class="jsCalendar-current">14</td><td>15</td><td>16</td></tr><tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr><tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr><tr><td>31</td><td class="jsCalendar-next">1</td><td class="jsCalendar-next">2</td><td class="jsCalendar-next">3</td><td class="jsCalendar-next">4</td><td class="jsCalendar-next">5</td><td class="jsCalendar-next">6</td></tr></tbody></table></div>
    </section>
  </main>
);
