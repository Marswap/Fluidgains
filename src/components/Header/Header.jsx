import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src='./images/logo.png' alt='logo' className='logo' />

      </NavLink>
      <Navbar />
    </MainHeader>
  );

};

const MainHeader = styled.header`
background: rgb(8,179,209);
background: linear-gradient(175deg, rgba(8,179,209,0.8953956582633054) 0%, rgba(2,25,64,1) 39%);







  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 23%;
  }


`;

export default Header;