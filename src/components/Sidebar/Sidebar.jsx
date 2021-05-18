import React from "react";
import logo from '../../images/logo@1X.png'
import './Sidebar.scss';

export const Sidebar = () => (
  <aside className="sidebar">
    <nav className="navigation">
      <button className="sidebar__logo">
        <h1 className="visually-hidden">Admin panel ShapeRex</h1>
        <img
          src={logo}
          width="134"
          height="26"
          alt="ShapeRex-logo"
        />
      </button>
      <ul className="admin-panel-navigation">
     
       <a href='#/dashboard' className="admin-panel-navigation__item" > 
       
          <button className="admin-panel-navigation__link admin-panel-navigation__dashboard dush">
            Dashboard
          </button>
          
          </a>
        
        <a href='#/mytask' className="admin-panel-navigation__item" > 
        
          <button className="admin-panel-navigation__link admin-panel-navigation__task  dush">
            My Task
          </button>
        </a>

        <a href='#/myproject' className="admin-panel-navigation__item" > 
        
          <button className="admin-panel-navigation__link admin-panel-navigation__project  dush">
            My Project
          </button>
        </a>
        <a href='#/mywallet' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__wallet  dush">
            My Wallet
          </button>
        </a>
        <a href='#/historydata' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__data  dush">
            History Data
          </button>
        </a>
        <a href='#/invoice' className="admin-panel-navigation__item">
          <button className="admin-panel-navigation__link admin-panel-navigation__invoice  dush">
            Invoice
          </button>
        </a>
        <a href='#/helps' className="admin-panel-navigation__item ">
          <button className="admin-panel-navigation__link admin-panel-navigation__helps  dush">
            Helps
          </button>
        </a>
      </ul>
      <div className="user-navigation">
        <a href='#/logout' className="user">
        <button className="user-navigation__logout user-navigation__logout-icon">
          Logout
        </button>
        </a>
      </div>
    </nav>
  </aside>
);
