import styles from './App.module.scss';
import { Wrapper } from '../Wrapper';
import { Header } from '../Header';

export const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div className={styles.app}>App</div>
      </Wrapper>
    </>
  );
};
