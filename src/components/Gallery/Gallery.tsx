import { Wrapper } from '../Wrapper';
import { GalleryGrid } from './GalleryGrid';
import { Pagination } from './Pagination';
import styles from './Gallery.module.scss';
import { useState } from 'react';

export const Gallery = () => {
  const [page, setPage] = useState(1);
  
  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.main__container}>
          <GalleryGrid />
          <Pagination page={page} setPage={setPage}/>
        </div>
      </Wrapper>
    </main>
  );
};
