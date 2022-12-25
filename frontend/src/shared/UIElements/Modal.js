import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import "./modal.scss";

function ModalOverlay(props){
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal_header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={e=>{e.preventDefault()}} >
                <div className={`modal_content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal_footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    );
    return (
        ReactDOM.createPortal(content,document.getElementById("modal-hook"))
    )
}


function Modal(props) {
  return (
    <>
        {props.show && <div className="backdrop"></div> }
        <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames="modal">
            <ModalOverlay {...props}/>
        </CSSTransition>
    </>
  )
}

export default Modal
