import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatsByQuery } from '../../../redux/catsSlice';
import styles from './GalleryGrid.module.scss';

export const GalleryGrid = () => {
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.cats.currentPageCats);

  useEffect(() => {
    dispatch(getCatsByQuery({ page: 0 }));
  }, []);

  return (
    <div className={styles.gallery}>
      {cats &&
        cats.map((cat) => (
          <div className={styles.gallery__card} key={cat.id}>
            <img
              className={styles.gallery__image}
              src={cat.url}
              alt={"cat image"}
            />
          </div>
        ))}
    </div>
  );
};
