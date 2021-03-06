import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import {ButtonContainer} from "./button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <lu className="navbar-nav" align-atems-center>
          <li className="nav-items" ml-5>
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </lu>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span>
                <i className="fas fa-cart-plus" />
            </span>
              my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
 const NavWrapper =  styled.nav`
 background: var(--mainBlue);
 .nav-link{
 color: var(--mainWhite) !important;
 font-size:1.4rem;
 text-transform:capitalize;
 `;
