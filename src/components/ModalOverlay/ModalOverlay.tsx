
import { FC } from "react";
import styles from "./ModalOverlay.module.css";

const ModalOverlay: FC<{ readonly onClose: (a: boolean) => void }> = (
  props
) => {
  return (
    <div
      className={styles.overlay}
      onClick={() => {
        props.onClose(false);
      }}
    ></div>
  );
};

export default ModalOverlay;