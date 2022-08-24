import React from "react";
// import "./form.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
    <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="titleCloseBtn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
       
     
        <div>

        <form >

        <label>
          Name:
          <input type="name" value = "name" />
          </label>
      
        <label>
          Email:
          <input type="email" value = "email" />
          </label>

          </form>
      
        </div>
      
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      </div>
      </div>
  
  );
}

export default Modal;