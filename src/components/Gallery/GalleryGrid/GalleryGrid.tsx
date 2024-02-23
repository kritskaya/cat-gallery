import { FC, useState } from 'react';
import { Cat } from '../../../api/types';
import styles from './GalleryGrid.module.scss';
import { Modal } from '../../Modal';
import { ModalPhoto } from '../../ModalPhoto';

type GalleryProps = {
  items: Cat[];
};

export const GalleryGrid: FC<GalleryProps> = ({ items }) => {
  const [modalActive, setModalActive] = useState(false);
  const [currentItem, setCurrentItem] = useState<Cat | null>(null);

  const handlePhotoClick = (item: Cat) => {
    setModalActive(true);
    setCurrentItem(item);
  };

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
                onClick={() => handlePhotoClick(item)}
              />
            </div>
          ))}
      </div>

      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <ModalPhoto item={currentItem} />
      </Modal>
    </>
  );
};
