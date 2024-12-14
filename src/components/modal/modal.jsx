import classes from "./modal.module.css";

function Modal({ children, onClose }) {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      <dialog
        open
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}

      >
        <button className={classes.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
