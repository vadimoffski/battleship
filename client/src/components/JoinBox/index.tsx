import { FC } from 'react';

import Box from '@components/Box';
import CopyToClipboard from '@components/CopyToClipboard';
import LoadingDots from '@components/LoadingDots';

type JoinBoxProps = {
  name: string;
  link: string;
};

const JoinBox: FC<JoinBoxProps> = ({ name = '...', link = '' }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Box>
        <h2 className="mb-5 text-2xl text-white">
          Hey <strong>{name}</strong>, copy and paste the URL below to send to
          your friend:
        </h2>
        <CopyToClipboard value={link} />
        <h1 className="mt-6 text-2xl text-white">
          Waiting for other opponent to join the game
          <LoadingDots />
        </h1>
      </Box>
    </div>
  );
};

export default JoinBox;
