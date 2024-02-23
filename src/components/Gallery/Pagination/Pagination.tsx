import { FC, useMemo } from 'react';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { ITEMS_COUNT } from '../../../common/constants';
import styles from './Pagination.module.scss';
import { PaginationSelect } from '../PaginationSelect';

type PaginationProps = {
  page: number;
  perPage: number;
  setPage: (value: number) => void;
  setPerPage: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  page,
  perPage,
  setPage,
  setPerPage,
}) => {
  const pagesCount = useMemo(() => Math.ceil(ITEMS_COUNT / perPage), [perPage]);

  return (
    <>
      <div className={styles.pagination}>
        <div className={styles.pagination__btns}>
          <button
            type="button"
            className={styles.btn}
            disabled={page === 0}
            onClick={() => setPage(0)}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button
            type="button"
            className={styles.btn}
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            <MdKeyboardArrowLeft />
          </button>
          <div className={styles.page}>{page + 1}</div>
          <button
            type="button"
            className={styles.btn}
            disabled={page === pagesCount - 1}
            onClick={() => setPage(page + 1)}
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            type="button"
            className={styles.btn}
            disabled={page === pagesCount - 1}
            onClick={() => setPage(pagesCount - 1)}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className={styles.pagination__select}>
          <PaginationSelect
            perPage={perPage}
            setPerPage={setPerPage}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};
