import React from 'react'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const Error = () => {



  return (

    <Wraper>

      <div class="container">
        <img className='err' src='./images/error.jpeg' alt='error' />
        <div class="topright" >Page Not Found</div>
      </div>

      <NavLink to='/'>

        <button className="button-19" role="button">Go Back</button>
      </NavLink>

    </Wraper>
  );

};

const Wraper = styled.section`

padding: 12rem 0;
display :flex;
justify-content: center;
align-items:center;
flex-direction : column;

.topright {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 27px;
    color:#0061bd;
    font-family: 'Courier New', monospace;
    font-weight: 900;
      


  }
  
  .container {
    position: relative;
  }
.err{
    display: block;
    width: 87rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    
    

    
}



/* CSS */
.button-19 {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
}

.button-19:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:main,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

`;
export default Error;