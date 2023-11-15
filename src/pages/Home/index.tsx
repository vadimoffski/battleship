import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';

import styles from './styles.module.scss';

const Home: FC = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/welcome');
  };

  return (
    <main className={styles.main}>
      <Button name="Start" onClick={handleStart} />
    </main>
  );
};

export default Home;
