import React, { Component } from 'react';
import NavbarPage from './components/NavbarPage';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Upload from './components/Upload';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage />
        <Upload />
      </React.Fragment>
    )
  }
}

export default App;
