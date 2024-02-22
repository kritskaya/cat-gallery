import styles from './App.module.scss';
import { Wrapper } from '../Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <div className={styles.app}>Cats Gallery</div>
    </Wrapper>
  );
};
