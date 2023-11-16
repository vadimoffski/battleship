import { v4 as idv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import WelcomeForm from '@components/forms/WelcomeForm';

import styles from './styles.module.scss';

const Welcome = () => {
  const navigate = useNavigate();
  const newGameRoomId = idv4();

  const handleNext = (name: string) => {
    navigate(`/${newGameRoomId}`, { state: { userName: name } });
  };

  return (
    <div className={styles.welcome}>
      <WelcomeForm onSubmit={handleNext} />
    </div>
  );
};

export default Welcome;
