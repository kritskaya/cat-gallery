import { FC } from 'react';
import styles from './PaginationSelect.module.scss';

type PaginationSelectProps = {
  perPage: number;
  setPerPage: (value: number) => void;
  setPage: (value: number) => void;
};

export const PaginationSelect: FC<PaginationSelectProps> = ({
  perPage,
  setPerPage,
  setPage
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(e.target.value));
    setPage(0);
  }

  return (
    <div className={styles.block}>
      <label className={styles.block__label}>На странице:</label>
      <select className={styles.block__select} value={perPage} onChange={handleChange}>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
        <option value="48">48</option>
      </select>
    </div>
  );
};
