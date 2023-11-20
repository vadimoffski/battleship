import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as idv4 } from 'uuid';

import * as METHOD from '@connection/methods/clientToServer';

import WelcomeForm from '@components/forms/WelcomeForm';

import styles from './styles.module.scss';

const Welcome = () => {
  const navigate = useNavigate();
  const newGameRoomId = idv4();

  const handleNext = useCallback(
    (userName: string): void => {
      navigate(`/${newGameRoomId}`, { state: { userName } });
      METHOD.joinGameRoom({
        gameId: newGameRoomId,
        userName,
        isCreator: true,
      });
    },
    [newGameRoomId],
  );

  return (
    <div className={styles.welcome}>
      <WelcomeForm onSubmit={handleNext} />
    </div>
  );
};

export default Welcome;
