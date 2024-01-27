// REACT & LIBRARIES
import { useState, createContext, useContext, cloneElement } from "react";
import { createPortal } from "react-dom";

// STYLES
import "./Modal.scss";
import { HiXMark } from "react-icons/hi2";

// HOOKS
import { useOutsideClick } from "../../hooks";

// UI COMPONENTS
import { Button } from "../index";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, setOpenName, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="overlay">
      <div className="modal" ref={ref}>
        <button className="modal-button" onClick={close}>
          <HiXMark />
        </button>
        <div>{cloneElement(children, { handleCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

function Open({ children, opens: opensWindowName }) {
  const { setOpenName } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => setOpenName(opensWindowName),
  });
}

function ConfirmModal({ handleConfirm, disabled, handleCloseModal }) {
  return (
    <div className="confirm-modal">
      <h3 className="confirm-modal-title">CLOSE LISTING</h3>

      <p className="confirm-modal-subtitle">
        Are you sure you want to close this pet permanently? Please note that
        this is{" "}
        <span className="confirm-modal-subtitle-highlight">irreversible.</span>
      </p>

      <div className="confirm-modal-buttons">
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={handleCloseModal}
        >
          REMOVE
        </Button>
        <Button variation="primary" disabled={disabled} onClick={handleConfirm}>
          REUNITE
        </Button>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.ConfirmModal = ConfirmModal;

export default Modal;
