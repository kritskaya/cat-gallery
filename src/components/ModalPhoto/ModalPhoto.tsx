import { FC } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Cat } from '../../api/types';
import styles from './ModalPhoto.module.scss';
import { Modal } from '../Modal';

type ModalPhotoProps = {
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
  item: Cat | null;
};

export const ModalPhoto: FC<ModalPhotoProps> = ({
  modalActive,
  setModalActive,
  item,
}) => {
  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive}>
      {item && (
        <div className={styles.content}>
          <img
            className={styles.content__photo}
            src={item.url}
            alt="cat view photo"
          />
          <div className={styles.content__description}>
            {item.breeds.map((breed, index) => (
              <p
                key={index}
                className={styles.content__note}
              >{`Breed: ${breed.name}, temperament: ${breed.temperament}, origin: ${breed.origin}`}</p>
            ))}
          </div>
          <button
            className={styles.closeBtn}
            type="button"
            onClick={() => setModalActive(false)}
          >
            <RxCross2 />
          </button>
        </div>
      )}
    </Modal>
  );
};
