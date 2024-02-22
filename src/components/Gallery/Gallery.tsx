import { Wrapper } from '../Wrapper';
import { GalleryGrid } from './GalleryGrid';
import { Pagination } from './Pagination';
import styles from './Gallery.module.scss';

export const Gallery = () => {

  return (
    <main className={styles.main}>
      <Wrapper>
        <div className={styles.main__container}>
          <GalleryGrid />
          <Pagination />
        </div>
      </Wrapper>
    </main>
  );
};
