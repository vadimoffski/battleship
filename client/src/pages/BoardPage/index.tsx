import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import JoinBox from '@components/JoinBox';

import './styles.module.scss';

const BoardPage = () => {
  // const { gameId } = useParams();
  const { state } = useLocation();

  // const [opponentSocketId, setOpponentSocketId] = useState('');

  const [opponentDidJoinTheGame] = useState(false);

  const [opponentUserName] = useState('');
  const [gameSessionDoesNotExist] = useState(false);

  return (
    <>
      {opponentDidJoinTheGame ? (
        <div>
          <h4> Opponent: {opponentUserName} </h4>
          <div style={{ display: 'flex' }}>game</div>
          <h4> You: {state.userName} </h4>
        </div>
      ) : gameSessionDoesNotExist ? (
        <div>
          <h1 style={{ textAlign: 'center' }}> :( </h1>
        </div>
      ) : (
        <JoinBox name={state?.userName} link={window?.location?.href} />
      )}
    </>
  );
};

export default BoardPage;
