import React, { useEffect, FC } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";

type TModalProps = {
  readonly onClose: (a: boolean) => void;
  readonly title?: string;
  readonly children: React.ReactNode;
};

export const Modal: FC<TModalProps> = (props) => {
  const modals = document.getElementById("react-modals")!;

  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose(true);
      }
    };
    window.addEventListener("keydown", closeByEsc);

    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay onClose={props.onClose} />
      <div className={`${styles.popup} `}>
        <div>
          <div
            className={`${styles.popup__header}`}
          >
            <span>{props.title}</span>
            <span
              className={styles.popup__closeicon}
              onClick={() => {
                props.onClose(false);
              }}
            >
              <CloseIcon type="primary" />
            </span>
          </div>
          <div className={styles.popup__content}>{props.children}</div>
        </div>
      </div>
    </>,
    modals
  );
};

export default Modal;