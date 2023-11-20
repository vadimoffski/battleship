import { FC, ReactNode } from 'react';

type ModalContainerProps = { children: ReactNode };

const ModalContainer: FC<ModalContainerProps> = ({ children }) => {
  return (
    <div className="fixed left-2/4 top-2/4 z-10 min-h-max min-w-max rounded-2xl border-2 px-60 py-96">
      {children}
    </div>
  );
};

export default ModalContainer;