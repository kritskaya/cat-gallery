import { FC, useState } from 'react';
import { Cat } from '../../../api/types';
import styles from './GalleryGrid.module.scss';
import { Modal } from '../../Modal';

type GalleryProps = {
  items: Cat[];
};

export const GalleryGrid: FC<GalleryProps> = ({ items }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className={styles.gallery}>
        {items &&
          items.map((item) => (
            <div className={styles.gallery__card} key={item.id}>
              <img
                className={styles.gallery__image}
                src={item.url}
                alt={'cat image'}
                onClick={() => setModalActive(true)}
              />
            </div>
          ))}
      </div>
      {modalActive && (
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          Modal
        </Modal>
      )}
    </>
  );
};
