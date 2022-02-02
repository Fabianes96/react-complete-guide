import React from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

export const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

export const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
export const Modal = ({children}) => {
  const portal = document.getElementById("overlays")
  return (
    <React.Fragment>
      {/* Without portals */}
      {/* <Backdrop />
      <ModalOverlay>
        {children}
      </ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </React.Fragment>
  )
};
