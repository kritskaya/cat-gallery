import { FC } from 'react';
import clsx from 'clsx';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { MAX_PAGE } from '../../../common/constants';
import styles from './Pagination.module.scss';

type PaginationProps = {
  page: number;
  setPage: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.btn}
        disabled={page === 1}
        onClick={() => setPage(1)}
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        type="button"
        className={styles.btn}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className={styles.page}>{page}</div>
      <button
        type="button"
        className={styles.btn}
        disabled={page === MAX_PAGE}
        onClick={() => setPage(page + 1)}
      >
        <MdKeyboardArrowRight />
      </button>
      <button
        type="button"
        className={styles.btn}
        disabled={page === MAX_PAGE}
        onClick={() => setPage(MAX_PAGE)}
      >
        <MdKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};
