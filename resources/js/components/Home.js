import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';



import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { FaBlog,FaBeer } from 'react-icons/fa';

import Header from './Header';
import Dashboard from './Dashboard';
// import { SideNav, Nav } from 'react-sidenav';



export default class Home extends Component {

    render() {
        return (
          <div>
          <Header/>
          <div style={{left:'50'}}>
          <Dashboard/>
          </div>

          </div>


        );
    }
}
