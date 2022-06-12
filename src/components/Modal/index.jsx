import React from "react";
import "./index.scss";

const Modal = (props) => {
  const { children } = props;
  return (
    <>
      <input class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <label class="modal__bg" for="modal-1"></label>
        <div class="modal__inner">
          <label class="modal__close" for="modal-1"></label>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
