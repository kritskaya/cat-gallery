import { useEffect, useState } from 'react';
import { Wrapper } from '../Wrapper';
import { GalleryGrid } from './GalleryGrid';
import { Pagination } from './Pagination';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCatsByQuery } from '../../redux/catsSlice';
import { Spinner } from '../Spinner';
import styles from './Gallery.module.scss';

export const Gallery = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(12);

  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.cats.currentPageCats);
  const isLoading = useAppSelector((state) => state.cats.isPending);

  useEffect(() => {
    dispatch(getCatsByQuery({ page, limit: perPage }));
  }, [page, perPage]);

  return (
    <>
      <main className={styles.main}>
        <Wrapper>
          <div className={styles.main__container}>
            <GalleryGrid items={cats} />
            <Pagination
              page={page}
              perPage={perPage}
              setPage={setPage}
              setPerPage={setPerPage}
            />
          </div>
        </Wrapper>
      </main>
      {isLoading && <Spinner />}
    </>
  );
};
