import React from 'react';

const withModalStyles = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ModalWithStyles: React.FC<P> = (props) => {
    return (
      <div className="fixed left-2/4 top-2/4 z-10 min-h-max min-w-max rounded-2xl border-2 px-60 py-96">
        <WrappedComponent {...props} />
      </div>
    );
  };

  return ModalWithStyles;
};

export default withModalStyles;
