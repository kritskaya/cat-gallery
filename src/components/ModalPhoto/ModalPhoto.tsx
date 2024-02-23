import { FC } from 'react';
import { Cat } from '../../api/types';
import styles from './ModalPhoto.module.scss';

type ModalPhotoProps = {
  item: Cat | null;
};

export const ModalPhoto: FC<ModalPhotoProps> = ({ item }) => {
  return (
    <>
      {item && (
        <div className={styles.content}>
          <img className={styles.content__photo} src={item.url} alt="" />
        </div>
      )}
    </>
  );
};
