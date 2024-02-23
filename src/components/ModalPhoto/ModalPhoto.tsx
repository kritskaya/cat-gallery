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
          <img
            className={styles.content__photo}
            src={item.url}
            alt="cat view photo"
          />
          <div className={styles.content__description}>
          {item.breeds.map((breed) => (
            <p
              className={styles.content__note}
            >{`Breed: ${breed.name}, temperament: ${breed.temperament}, origin: ${breed.origin}`}</p>
          ))}
          </div>
        </div>
      )}
    </>
  );
};
