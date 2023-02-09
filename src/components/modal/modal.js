import classes from "./modal.module.css";

const Modal = (props) => {
  return (
    <>
      {props.show && (
        <div className={classes.modal}>
          <div className={classes.content}>
            <h4>Compra con id: {props.id} completada con exito!</h4>
            <button onClick={props.onClose} className={classes.btn}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
