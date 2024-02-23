import { FC } from 'react';
import { Cat } from '../../../api/types';
import styles from './GalleryGrid.module.scss';

type GalleryProps = {
  items: Cat[];
};

export const GalleryGrid: FC<GalleryProps> = ({items}) => {
  return (
    <div className={styles.gallery}>
      {items &&
        items.map((item) => (
          <div className={styles.gallery__card} key={item.id}>
            <img
              className={styles.gallery__image}
              src={item.url}
              alt={'cat image'}
            />
          </div>
        ))}
    </div>
  );
};
