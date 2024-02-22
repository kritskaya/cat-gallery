import { Wrapper } from '../Wrapper';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Wrapper>
        <div className={styles.logo}>Cats Gallery</div>
      </Wrapper>
    </div>
  );
};
