import React from "react";
import img1 from '../../images/icon-search.svg';
import img2 from '../../images/icon-notification.svg';
import img3 from '../../images/icon-message.svg';
import img4 from '../../images/nick-ramil@1X.png';


import './Header.scss';

export const Header = () => (
  <header className="header">
    <ul className="header-navigation" >
      <li className="header-navigation__item ">
        <button className="header-navigation__link">
          <img
            src={img1}
            width="18"
            height="19"
            alt="icon-search"
          />
         
        </button>
        <ul className="call-submenu">
          <li>Search </li>
          

        </ul>
      </li>
      
      <li className="header-navigation__item ">
        <button
          className="header-navigation__link header-navigation__dashboard"
        >
          <img
            src={img2}
            width="18"
            height="19"
            alt="icon-invoice"
          />
          <span className="header-navigation__notification">24</span>
        </button>
        <ul className="call-submenu">
          <li> You have 24 Notification </li>
          <li> Notification 1 </li>
          <li> Notification 2 </li>
          <li>Notification 3 </li>
          <li> Notification 4 </li>
          <li> Notification 5 </li>
          <li> Show All Notifications  </li>

        </ul>
      </li>
      <li className="header-navigation__item ">
        <button className="header-navigation__link">
          <img
            src={img3}
            width="18"
            height="14"
            alt="header-navigation icon-message"
          />
          <span className="header-navigation__notification-message">5</span>
        </button>
        <ul className="call-submenu">
          <li  >  <span className="one">You have 5 Messages</span> </li>
          <li className="two">
                               
                                    <span className="block-text-three">Visited your profile.</span>
                                
                            </li>
          <li> Message </li>
          <li><span>Show All Messages</span> </li>

        </ul>
      </li>
      <li className="header-navigation__item">
        <button className="header-navigation__link">
          <img
            src={img4}
            width="41"
            height="41"
            alt="user logo"
          />
        </button>
      </li>
    </ul>
  </header>
);
