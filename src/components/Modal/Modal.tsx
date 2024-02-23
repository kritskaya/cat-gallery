import { FC } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';

interface ModalProps {
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
  children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({
  modalActive,
  setModalActive,
  children,
}) => {


  return (
    <div
      className={
        clsx(styles.modal, modalActive && styles.active)
      }
      onClick={() => setModalActive(!modalActive)}
    >
      <div
        className={
          modalActive
            ? styles.modalContent + ' ' + styles.modalContentActive
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
